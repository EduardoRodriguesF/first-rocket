import React from 'react';

import Input from '../../components/Input';

const Register: React.FC = () => {
  return (
    <div>
      <Input name="name" placeholder="Nome completo" />
      <Input name="cpf" placeholder="CPF" />
      <Input name="email" placeholder="E-mail" />
      <Input name="password" placeholder="Senha" type="password" />
    </div>
  );
};

export default Register;
