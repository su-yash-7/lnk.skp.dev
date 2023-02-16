import styled from 'styled-components';

const WebLinks = () => {
  return (
    <Container>
      <h1>WebLinks</h1>
    </Container>
  );
};

export default WebLinks;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 24px;
`;
