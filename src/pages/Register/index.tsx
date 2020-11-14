import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
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
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <div className="background" />
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
