import {
  configureStore,
  Reducer,
  AnyAction,
  ThunkAction,
  Action,
  CombinedState,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import logger from 'redux-logger';

import couterSlice, { CounterState } from '@reducers/counterSlice';

// ### 리듀서 State 타입 정의
export interface IReducerStates {
  counter: CounterState;
}

const rootReducer = (
  state: IReducerStates,
  action: AnyAction,
): CombinedState<IReducerStates> => {
  switch (action.type) {
    // next-redux-wrapper의 HYDRATE 액션 처리(그냥 이렇게만 해주면 됨)
    case HYDRATE:
      return { ...state, ...action.payload };

    // 슬라이스 통합
    default: {
      const combinedReducer = combineReducers({
        counter: couterSlice.reducer,
        // [couterSlice.name]: couterSlice.reducer,
        // [numberSlice.name]: numberSlice.reducer
      });
      return combinedReducer(state, action);
    }
  }
};

// ### store 생성 함수
const makeStore = () => {
  // 미들웨어 추가 (필요 없으면 생략)
  const middleware = getDefaultMiddleware();
  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
  }

  // store 생성
  const store = configureStore({
    reducer: rootReducer as Reducer<IReducerStates, AnyAction>, // 리듀서
    middleware, // 미들웨어
    // middleware: [...getDefaultMiddleware(), logger]
    devTools: process.env.NODE_ENV === 'development', // 개발자도구
  });

  // store 반환
  return store;
};

// ### 타입 익스포트
export type AppStore = ReturnType<typeof makeStore>; // store 타입
export type RootState = ReturnType<typeof rootReducer>; // RootState 타입
// export type RootState = ReturnType<AppStore['getState']>; // RootState 타입(위와 동일함)
export type AppDispatch = AppStore['dispatch']; // dispatch 타입
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>; // Thunk 를 위한 타입

// ### next-redux-wrapper의 wrapper 생성
const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});

// wrapper 익스포트
export default wrapper;

// 타입스크립트에서 useSelector와 useDisaptch 를 편하게 사용하게 해주는 커스텀 훅
// # useDispatch 대용 훅 : Thunk 사용을 쉽게 해줌
export const useAppDispatch: () => AppDispatch = useDispatch;

// # useSelector 대용 훅: useSelector 사용시 state 뒤에 붙여야 하는 RootState를 안붙여도 됨
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
