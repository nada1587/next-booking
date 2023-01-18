import IconButton from 'src/components/atoms/IconButton';
import LoginForm from 'src/components/services/Login/LoginForm';
import useModal from 'src/hooks/useModal';
import SVG from 'src/utils/SVG';
import styled from 'styled-components';

function Home() {
  const { openModal, ModalPortal } = useModal();

  return (
    <>
      <Container>
        <p>인류 페이지 테스트</p>
        <p style={{ fontFamily: 'Sofia Sans' }}>Whereas recognition</p>
        <IconButton onClick={openModal}>
          <SVG name="notice" width={24} height={24} viewBox="0 0 24 24" />
        </IconButton>
      </Container>

      <ModalPortal>
        <LoginForm />
      </ModalPortal>
    </>
  );
}

export default Home;

const Container = styled.div`
  padding: 20px;
`;
