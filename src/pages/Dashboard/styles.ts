import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
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
`;

export const Content = styled.div``;
