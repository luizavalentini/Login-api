import { Container, ForgetPassword, Wrapper } from "./Login.Styled";
import Logo from "../../assets/Logo-7.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Login: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="" />
      <Wrapper>
        <h1>SIGN IN</h1>
        <p>Entre com os seus dados para acessar a sua conta</p>
        <form action="">
          <label htmlFor="nome">Email:</label>
          <input
            required
            id="nome"
            type="text"
            placeholder="Insira seu e-mail"
          />
          <label htmlFor="cpf">Senha:</label>
          <input
            required
            id="cpf"
            type="text"
            placeholder="Insira sua senha"
          ></input>
            <ForgetPassword>
          <p>Esqueceu a senha?</p>
          <button className="button-senha-redefinir">Redefinir senha</button>
        </ForgetPassword>
        </form>
      </Wrapper>
      <button type="submit">Entrar</button>
        <ForgetPassword>
          <p>Não tem conta?</p>
          <button  className="button-senha-redefinir">Cadastre-se aqui</button> 
        </ForgetPassword>
    </Container>
  );
};
