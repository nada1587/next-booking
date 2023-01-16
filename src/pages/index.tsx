import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <p>인류 페이지 테스트</p>
      <p style={{ fontFamily: 'Sofia Sans' }}>Whereas recognition</p>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
`;
