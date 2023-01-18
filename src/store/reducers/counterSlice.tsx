import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from '@reduxjs/toolkit';
import { RootState } from '@store/index';

// initialState 타입 정의
export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

// initialState 생성
const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

// Thunk 예시
export const fetchAsync = createAsyncThunk(
  'counter/fetchAsync',
  async (text: string) => {
    console.log('thunk...', text);
    const resp = await fetch(
      'https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits',
    );
    const data = await resp.json();
    return data.value;
  },
);

// slice 생성
const couterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    plusCounter: (state: CounterState) => {
      state.value += 1;
    },
    minusCounter: (state: CounterState) => {
      state.value -= 1;
    },
    setCounter: (state: CounterState, action: { payload: CounterState }) => {
      state.value = action.payload.value;
    },
  },
  // thunk 처리
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending.type, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchAsync.fulfilled.type,
        (state, action: PayloadAction<number>) => {
          state.status = 'idle';
          state.value = action.payload;
        },
      )
      .addCase(fetchAsync.rejected.type, (state) => {
        state.status = 'failed';
      });
  },
});

// Action 익스포트
export const { plusCounter, minusCounter, setCounter } = couterSlice.actions;

// slice 익스포트
export default couterSlice;

export const selectCounter = (state: RootState) => state.counter;
