import { GetServerSideProps } from 'next';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  plusCounter,
  minusCounter,
  setCounter,
  selectCounter,
} from '@store/reducers/counterSlice';
import IconButton from 'src/components/atoms/IconButton';
import LoginForm from 'src/components/services/Login/LoginForm';
import useModal from 'src/hooks/useModal';
import SVG from 'src/utils/SVG';
import styled from 'styled-components';
import wrapper from '@store/index';

interface IserverSideData {
  id: number;
}

function Home({ id }: IserverSideData) {
  const [initialState, setInitialState] = useState(0);
  const { openModal, ModalPortal } = useModal();

  const dispatch = useDispatch();
  console.log(id);

  const { value } = useSelector(selectCounter);
  const plus = useCallback(
    ({ value }: any) => {
      dispatch(plusCounter());
    },
    [dispatch],
  );

  const minus = useCallback(
    ({ value }: any) => {
      dispatch(minusCounter());
    },
    [dispatch],
  );

  return (
    <>
      <Container>
        <p>페이지 글로벌 css 설정 확인 및 폰트 테스트</p>
        <p style={{ fontFamily: 'Sofia Sans' }}>Whereas recognition</p>
        <br />
        <br />
        <IconButton
          label="modal 오픈 및 form 테스트"
          withText
          onClick={openModal}
        >
          <SVG name="notice" width={24} height={24} viewBox="0 0 24 24" />
        </IconButton>
        <br />
        <br />
        <p>store 테스트</p>
        <button onClick={minus}>-</button>
        <span>{value}</span>
        <button onClick={plus}>+</button>
        <br />
        <p>Serverside Props : {id}</p>
        <br />
        <br />
        <p>state : {initialState}</p>
      </Container>

      <ModalPortal>
        <LoginForm />
      </ModalPortal>
    </>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    store.dispatch(
      setCounter({
        value: 5,
        status: 'idle',
      }),
    );
    store.dispatch(plusCounter());

    const result: IserverSideData = { id: 25 };
    return { props: result };
  });

export default Home;

const Container = styled.div`
  padding: 20px;
`;
