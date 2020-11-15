import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 300px;
  height: 200px;
  background: #a440fc;
  color: #fff;
  border-radius: 12px;
  padding: 32px;
  text-decoration: none;

  a {
    color: #fff;
    font-size: 18px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #d9d9d9;
    }
  }

  @media (max-width: 800px) {
    max-width: 300px;
    padding: 16px;
    height: 150px;

    a {
      font-size: 16px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;

  div.thumb {
    display: flex;
    flex-shrink: 0;
    width: 92px;
    height: 92px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: ${shade(0.2, '#a440fc')};

    img {
      width: 100%;
    }
  }

  .info {
    margin-left: 32px;
    h2 {
      color: #fff;
    }
    p {
      font-size: 18px;
    }
  }

  @media (max-width: 800px) {
    div.thumb {
      width: 52px;
      height: 52px;
    }

    div.info {
      margin-left: 0;
      h2 {
        font-size: 16px;
      }
    }
  }
`;
