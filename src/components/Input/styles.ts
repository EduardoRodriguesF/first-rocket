import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 730px;
  padding: 16px;
  border: none;
  border-radius: 100px;
  box-shadow: 0px 0px 6px #00000061;

  & + div {
    margin-top: 30px;
  }

  input {
    flex: 1;
    border: none;
    background: transparent;
  }
`;
