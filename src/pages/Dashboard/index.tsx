import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Content, Background } from './styles';

import Card from '../../components/Card';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <Background />
      <Header>
        <img src={logoImg} alt="1st Rocket" />
        <Link to="/">SAIR</Link>
      </Header>
      <Content>
        <Card mentor="Mentor" description="Text sobre o mentor apresentado." />
      </Content>
    </Container>
  );
};

export default Dashboard;
