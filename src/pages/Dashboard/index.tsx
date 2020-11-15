import React from 'react';
import { Link } from 'react-router-dom';
import { FiUnlock, FiLock } from 'react-icons/fi';

import {
  Container,
  Header,
  Content,
  Background,
  Slider,
  Mentoring,
} from './styles';
import Button from '../../components/Button';

import ClassCard from '../../components/ClassCard';
import ScheduleCard from '../../components/ScheduleCard';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  const courses = [
    {
      title: 'Como Planejar o seu Negócio',
      conclusion: 15,
      link:
        'https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/como-planejar-o-seu-negocio,9501b8a6a28bb610VgnVCM1000004c00210aRCRD',
    },
    {
      title: 'Aprender a Empreender',
      conclusion: 30,
      link:
        'https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/aprender-a-empreender,b070b8a6a28bb610VgnVCM1000004c00210aRCRD',
    },
    {
      title: 'Aprenda a Planejar as Estratégias do seu Negócio',
      conclusion: 15,
      link:
        'https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/aprenda-a-planejar-as-estrategias-do-seu-negocio,d590b8a6a28bb610VgnVCM1000004c00210aRCRD',
    },
    {
      title: 'Como elaborar um Plano de Negócio',
      conclusion: 15,
      link:
        'https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/como-elaborar-um-plano-de-negocio,1880b8a6a28bb610VgnVCM1000004c00210aRCRD',
    },
    {
      title: 'Como validar seu Modelo de Negócio',
      conclusion: 15,
      link:
        'https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/como-validar-seu-modelo-de-negocio,93b0b8a6a28bb610VgnVCM1000004c00210aRCRD',
    },
  ];

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="1st Rocket" />
        <Link to="/">SAIR</Link>
      </Header>
      <Content>
        <h2>Cursos recomendados</h2>
        <Slider>
          {courses.map(course => (
            <ClassCard
              key={course.link}
              title={course.title}
              conclusion={course.conclusion}
              link={course.link}
            />
          ))}
        </Slider>
        <Mentoring>
          <h2>Seu Status</h2>
          <p className="status">APROVADO</p>
          <div className="lock">
            <FiUnlock size={35} />
          </div>
          <Link to="/mentorias">
            <Button>marcar mentoria</Button>
          </Link>
          <div className="schedule">
            <ScheduleCard
              name="Jane Doe"
              time="12/12 às 16h"
              link="https://meet.google.com/dtf-adru-dcm"
            />
            <ScheduleCard name="Eduardo Rodrigues" time="12/12 às 16h" />
            <ScheduleCard name="Amanda Zanatta" time="12/12 às 16h" />
            <ScheduleCard name="Lucca Dias" time="12/12 às 16h" />
            <ScheduleCard name="Amanda Zanatta" time="12/12 às 16h" />
          </div>
        </Mentoring>
      </Content>
    </Container>
  );
};

export default Dashboard;
