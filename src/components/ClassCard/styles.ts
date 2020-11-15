import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  min-width: 500px;
  height: 250px;
  background: #01f0b1;
  border-radius: 12px;
  padding: 24px;
  text-decoration: none;

  div {
    width: 50%;
    h2,
    p {
      color: #333;
    }
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
    font-size: 18px;

    span {
      font-size: 24px;
      font-weight: bold;
    }
  }
`;
