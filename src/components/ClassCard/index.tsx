import React from 'react';

import { Container, Content } from './styles';
import thumbImage from '../../assets/thumb.jpg';

interface CardProps {
  title: string;
  conclusion: number;
  link: string;
}

const ClassCard: React.FC<CardProps> = ({ title, conclusion, link }) => {
  return (
    <Container href={link} target="_blank">
      <div className="thumb">
        <img src={thumbImage} alt="thumb" />
      </div>
      <Content>
        <h2>{title}</h2>
        <p>
          Conclusão em <span>{conclusion}</span> dias
        </p>
      </Content>
    </Container>
  );
};

export default ClassCard;
