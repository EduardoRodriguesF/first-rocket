import React from 'react';

import { Container, Content } from './styles';
import thumbImage from '../../assets/thumb.png';

interface CardProps {
  title: string;
  progress: string;
}

const ClassCard: React.FC<CardProps> = ({ title, progress }) => {
  return (
    <Container>
      <div className="thumb">
        <img src={thumbImage} alt="thumb" />
      </div>
      <Content>
        <h2>{title}</h2>
        <p>
          <span>{progress}%</span> Concluído
        </p>
      </Content>
    </Container>
  );
};

export default ClassCard;
