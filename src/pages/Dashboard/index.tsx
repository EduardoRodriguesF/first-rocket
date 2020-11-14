import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Content } from './styles';

import ClassCard from '../../components/ClassCard';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src="" alt="1st Rocket" />
        <Link to="/">SAIR</Link>
      </Header>
      <ClassCard title="Primeiros passos para empreender" progress="75" />
    </Container>
  );
};

export default Dashboard;
