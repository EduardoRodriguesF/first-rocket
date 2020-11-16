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
  margin-top: 40px;

  h2 {
    color: #a440fc;
    margin-bottom: 32px;
  }

  .mentor {
    display: flex;
    min-width: 300px;
    max-width: 800px;
    background: #a440fc;
    border-radius: 12px;
    padding: 24px;
    color: #fff;

    & + .mentor {
      margin-top: 16px;
    }

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

    div.info {
      margin-left: 24px;
      h2 {
        color: #fff;
      }
    }

    @media (max-width: 800px) {
      div.thumb {
        width: 52px;
        height: 52px;
      }

      div.info {
        h2 {
          font-size: 18px;
        }
      }
    }
  }

  .schedule {
    display: flex;
    overflow: auto;

    .time {
      display: flex;
      align-items: center;
      justify-items: space-between;
      padding: 6px;
      margin: 12px 6px;
      background: #01f0b1;
      border-radius: 100px;
      color: #616064;

      p {
        width: 82px;
        text-align: center;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        color: #616064;
        background: #fff;
        box-shadow: 0px 0px 6px #00000029;
        border: none;
        border-radius: 50%;
      }
    }
    .time.busy {
      opacity: 0.5;

      button {
        display: none;
      }
    }
  }
`;
