import React from 'react';
import { FiUser } from 'react-icons/fi';

import { Container, Content } from './styles';

interface CardProps {
  name: string;
  time: string;
  link?: string;
  avatar?: string;
}

const ClassCard: React.FC<CardProps> = ({
  name,
  time,
  link = 'indisponível',
  avatar,
}) => {
  return (
    <Container>
      <Content>
        <div className="thumb">
          {avatar ? <img src={avatar} alt="thumb" /> : <FiUser size={30} />}
        </div>
        <div className="info">
          <h2>Mentoria com {name}</h2>
          <p>{time}</p>
        </div>
      </Content>

      <a href={link} target="_blank" rel="noreferrer">
        {link || 'Link indisponível'}
      </a>
    </Container>
  );
};

export default ClassCard;
