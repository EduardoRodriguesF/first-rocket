import React from 'react';

import { Container } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Register: React.FC = () => {
  return (
    <div>
      <form>
        <Input name="name" placeholder="Nome completo" />
        <Input name="cpf" placeholder="CPF" />
        <Input name="email" placeholder="E-mail" />
        <Input name="password" placeholder="Senha" />

        <Button type="submit">confirmar</Button>
      </form>
    </div>
  );
};

export default Register;
