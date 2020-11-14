import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  max-width: 600px;
  height: 300px;
  background: #01f0b1;
  border-radius: 12px;
  padding: 24px;

  div {
    width: 50%;
  }

  div.thumb {
    display: flex;
    align-items: center;

    img {
      border-radius: 5px;
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 24px;

  p {
    margin-top: 48px;
    font-size: 24px;

    span {
      font-size: 48px;
      font-weight: bold;
    }
  }
`;
