import React, { useContext } from "react";
import { Wrapper } from "./Modal.Styled";
import editaUsuario from "../../assets/edita-usuario.svg";

export const Modal = () => {

  return (
    <Wrapper>
      <div>
        <img src={editaUsuario} ></img>
        <form >
          <label htmlFor="nome">Insira seu nome</label>
          <input
            required
            id="nome"
            type="text"
            placeholder="Insira seu nome"
          />
          <label htmlFor="cpf">Data de nascimento</label>
          <input
            required
            id="dataNascimento"
            type="text"
            placeholder="Insira seu CPF"
          ></input>
          <label htmlFor="rg">Insira seu CPF</label>
          <input
            required
            id="cpf"
            type="text"
            placeholder="Insira seu CPF"
          ></input>
          <label htmlFor="cnh">Insira seu e-mail</label>
          <input
            required
            id="email"
            type="text"
            placeholder="Insira sua e-mailNH"
          ></input>
          <button type="submit"> Cadastrar </button>
        </form>
      </div>
    </Wrapper>
  );
};

