import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;

  @media (max-width: 800px) {
    padding: 0 20px;
  }
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 100px;

  align-items: center;
  justify-content: space-between;

  a {
    font-weight: 600;
    font-size: 23px;
    color: #926ff9;
    letter-spacing: 0.92px;
    text-decoration: none;
  }

  img {
    width: 200px;
  }

  @media (max-width: 800px) {
    img {
      width: 100px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;

  > h2 {
    color: #a440fc;
  }
`;

export const Slider = styled.div`
  display: flex;
  overflow: auto;
  padding: 20px 0;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  /* width */
  ::-webkit-scrollbar {
    height: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #d8f0e9;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #01f0b1;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${shade(0.05, '#01f0b1')};
  }
`;
