import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  max-width: 730px;
  padding: 14px;
  border: 2px solid #fff;
  border-radius: 100px;
  box-shadow: 0px 0px 6px #00000061;

  & + div {
    margin-top: 30px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  input {
    flex: 1;
    border: none;
    background: transparent;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Error = styled.span`
  font-size: 12px;
  color: #c53030;
`;
