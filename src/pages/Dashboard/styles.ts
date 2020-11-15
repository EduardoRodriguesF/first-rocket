import styled from 'styled-components';
import { shade } from 'polished';

import waveImg from '../../assets/wave.svg';

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
  margin-top: 40px;

  h2 {
    color: #a440fc;
  }
`;

export const Slider = styled.div`
  display: flex;
  overflow: auto;
  padding: 20px 0;

  a + a {
    margin-left: 82px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    a {
      min-width: 300px;
      height: 180px;
    }

    div.thumb {
      display: none !important;
    }

    div {
      width: 100% !important;
      margin-left: 0;
    }

    a + a {
      margin-left: 0;
      margin-top: 24px;
    }
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

export const Mentoring = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 82px;
  width: 100%;

  .status {
    margin-top: 24px;
    width: 50%;
    min-width: 300px;
    text-align: center;
    padding: 40px 0;
    font-size: 30px;
    font-weight: 800;
    color: #fff;
    background: #a440fc;
    border-radius: 11px;
  }

  .lock {
    margin-top: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    color: #fff;
    background: #a440fc;
    border-radius: 50%;
  }
`;

export const Background = styled.div`
  position: absolute;
  z-index: -100;
  top: -60px;
  right: -50px;

  width: 700px;
  height: 700px;
  background: url(${waveImg}) no-repeat;
  transform: rotate(-90deg);
`;
