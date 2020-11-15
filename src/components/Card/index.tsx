import React from 'react';

import { Container, Content } from './styles';
import thumbImage from '../../assets/thumb.png';

interface CardProps {
  mentor: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ mentor, description }) => {
  return (
    <Container href="/">
      <div className="thumb">
        <img src={thumbImage} alt="thumb" />
      </div>
      <Content>
        <h2>{mentor}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  );
};

export default Card;
