import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 300px;
  padding: 16px;

  font-weight: 600;
  font-size: 23px;
  text-transform: uppercase;

  color: #fff;
  background: #8c58f1;

  border: none;
  border-radius: 100px;

  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, '#8c58f1')};
  }
`;
