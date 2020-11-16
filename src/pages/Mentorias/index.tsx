/* eslint-disable consistent-return */
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

import { Container, Content, Header } from './styles';

interface Mentors {
  id: number;
  nomeCompleto: string;
  sobre: string;
  horarios: string;
}

const Mentorias: React.FC = () => {
  const history = useHistory();
  const [mentors, setMentors] = useState<Mentors[]>([]);

  // Variável para testes
  const tMentors = [
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

  const getMentors = useCallback(async () => {
    await api.get('mentores').then(response => {
      setMentors(response.data);
    });
  }, []);

  useEffect(() => {
    getMentors();
  }, []);

  const handleNewMentoring = async (mentorId: number, time: string) => {
    await api.post('mentorias', {
      idMentor: Number(mentorId),
      idMentorado: 1,
      dataEHora: time,
      link: null,
    });

    history.push('/dashboard');
  };

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
                <h2>{mentor.nomeCompleto}</h2>
                <p>{mentor.sobre}</p>
              </div>
            </div>
            <div className="schedule">
              {mentor.horarios.split(',').map(time => (
                <div className="time">
                  <p>{time}</p>
                  <button
                    onClick={() => handleNewMentoring(mentor.id, time)}
                    data-hour={time}
                    type="button"
                  >
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
