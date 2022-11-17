import { Container, ForgetPassword, Wrapper } from "./Login.Styled";
import Logo from "../../assets/Logo-7.svg";
import { useState } from "react";
import { Modal } from "../../components/Modal";

export const Login: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
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
        </form>
        <button type="submit">Entrar</button>
        <ForgetPassword>
          <p>Não tem conta?</p>
          <button onClick = { () => setIsModalVisible(true) } className="button-senha-redefinir">Cadastre-se aqui</button> {isModalVisible ? 
          <Modal /> : null} 
        </ForgetPassword>
        <ForgetPassword>
          <p>Esqueceu a senha?</p>
          <button className="button-senha-redefinir">Redefinir senha</button>
        </ForgetPassword>
      </Wrapper>
    </Container>
  );
};
