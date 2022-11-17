import { Container, Wrapper } from "./SignUp.Styled";
import Logo from "../../assets/Logo-9.svg";
import { useState } from "react";


export const SignUp: React.FC = () => {

  return (
    <Container>
      <img src={Logo} alt="" />
      <Wrapper>
        <h1>SIGN UP</h1>
        <form action="">
          <label htmlFor="nome">Insira seu Nome</label>
          <input
            required
            id="nome"
            type="text"
            placeholder="Insira seu nome"
          />
            <label htmlFor="cpf">Insira seu CPF</label>
          <input
            required
            id="cpf"
            type="text"
            placeholder="Insira seu cpf"
          ></input>
          <label htmlFor="cpf">Insira sua data de Nascimento</label>
          <input
            required
            id="dataNascimento"
            type="date"
            placeholder="Insira sua senha"
          ></input>
            <label htmlFor="cpf">Insira seu E-mail</label>
          <input
            required
            id="email"
            type="text"
            placeholder="Insira seu e-mail"
          ></input>
        </form>
      </Wrapper>
      <button type="submit">Cadastrar-me</button>
    </Container>
  );
};
