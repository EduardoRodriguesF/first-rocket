import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 40px;
    padding: 0 24px;

    width: 100%;
    max-width: 750px;

    button {
      margin-top: 24px;
    }
  }
`;
