import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';

import getValidationErrors from '../../utils/getValidationErrors';

import api from '../../services/api';

import { Container } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface User {
  name: string;
  cpf: string;
  email: string;
  password: string;
}

const Register: React.FC = props => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(async (data: User) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string()
          .matches(
            /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/,
            'Digite seu nome completo',
          )
          .required('Nome obrigatório'),
        cpf: Yup.string()
          .matches(/^(\d{3})\.*(\d{3})\.*(\d{3})-*(\d{2})$/, 'CPF inválido')
          .required('CPF obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('E-mail inválido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('mentorado', {
        nomeCompleto: data.name,
        cpf: data.cpf,
        email: data.email,
      });

      history.push('/dashboard');
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <img src={logoImg} alt="First Rocket" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="cpf" placeholder="CPF" />
        <Input name="email" placeholder="E-mail" />
        <Input name="password" placeholder="Senha" type="password" />

        <Button type="submit">confirmar</Button>
      </Form>
    </Container>
  );
};

export default Register;
