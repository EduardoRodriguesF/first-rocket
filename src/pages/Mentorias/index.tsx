import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Header } from './styles';

const Mentorias: React.FC = () => {
  // Variável para testes
  const mentors = [
    {
      name: 'Jane Doe',
      about: 'Especialista em negócios digitais',
      schedule: ['16:00', '17:00', '18:00', '19:00'],
    },
    {
      name: 'Luciana Silva',
      about: 'Especialista em serviços',
      schedule: ['16:00', '17:00', '18:00', '19:00'],
    },
    {
      name: 'Marcos',
      about: 'Especialista em E-commerce',
      schedule: ['16:00', '17:00', '18:00', '19:00'],
    },
    {
      name: 'Felipe',
      about: 'Especialista em Atendimento ao cliente',
      schedule: ['16:00', '17:00', '18:00', '19:00'],
    },
  ];

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="1st Rocket" />
        <Link to="/dashboard">VOLTAR</Link>
      </Header>
      <Content>
        <h2>Escolha um mentor e um de seus horários disponíveis</h2>
        {mentors.map(mentor => (
          <>
            <div className="mentor">
              <div className="thumb">
                <FiUser size={30} />
              </div>
              <div className="info">
                <h2>{mentor.name}</h2>
                <h3>{mentor.about}</h3>
              </div>
            </div>
            <div className="schedule">
              {mentor.schedule.map(time => (
                <div className="time">
                  <p>{time}</p>
                  <button type="button">
                    <GoPlus />
                  </button>
                </div>
              ))}
            </div>
          </>
        ))}
      </Content>
    </Container>
  );
};

export default Mentorias;
