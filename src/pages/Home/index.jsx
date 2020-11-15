/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import './home.css';

export default function Home() {
  return (
    <div>
      <div>
        <div className="header">
          <Link to="/register">
            <Button className="cadastre">CADASTRE-SE</Button>
          </Link>
        </div>
        <div className="centerBuddy">
          <h1 className="title">
            Ajudamos você nos primeiros passos em sua jornada empreendedora
          </h1>
          <p className="subtitle">
            Começar pode ser a parte mais difícil quando se pensa em empreender.
            Mas com a First Rocket você tem vídeo aulas com especialistas,
            mentorias, acompanhamento personalizado e tudo mais oque precisar
            para tirar sua ideia do papel!
          </p>
          <input placeholder="E-mail" className="input" />
          <input placeholder="Senha" className="input" />
          <Link to="/login">
            <Button className="login">LOGIN</Button>
          </Link>
        </div>
      </div>
      <div className="endbuddy">
        <h2 className="prepare">
          PREPARE SUA IDEIA, ENSAIE SEU PITCH E DÊ UM START NO SEU SONHO
          EMPREENDEDOR
        </h2>
        <div className="block">
          <div className="plataformaInterativa">
            <h3 className="plataformaInterativaTitle">Plataforma interativa</h3>
            <h4 className="plataformaInterativaText">
              Envie um vídeo Pitch de no máximo 5 min, explicando sua ideia.
            </h4>
          </div>
          <div className="aguardeOMatch">
            <h3 className="aguardeOMatchTitle">Aguarde o match</h3>
            <h4 className="aguardeOMatchText">
              Nossos mentores avaliam e deixam um feedback. As melhores ideias
              entram no processo de aceleração.
            </h4>
          </div>
          <div className="mentorias">
            <h3 className="mentoriasTitle">Mentorias com especialistas</h3>
            <h4 className="mentoriasText">
              Projeto aprovado? Seu mentor irá apadrinhar sua ideia de perto em
              toda jornada.
            </h4>
          </div>
        </div>
        <Link to="/register">
          <Button className="comece">COMECE JÁ!</Button>
        </Link>
      </div>
    </div>
  );
}
