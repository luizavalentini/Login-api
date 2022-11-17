import React, { useContext } from "react";
import { WrapperModal } from "./Modal.Styled";
import Logo2 from "../../assets/Logo-8.svg";

export const Modal = () => {
  return (
    <WrapperModal>
      <div>
        <img src={Logo2}></img>
        <form>
          <label htmlFor="nome">Nome Completo:</label>
          <input
            required
            id="nome"
            type="text"
            placeholder="Insira seu nome"
          />
          <label htmlFor="cpf">CPF:</label>
          <input
            required
            id="cpf"
            type="text"
            placeholder="Insira seu CPF"
          ></input>
          <label htmlFor="rg">RG:</label>
          <input
            required
            id="rg"
            type="text"
            placeholder="Insira seu RG"
          ></input>
          <label htmlFor="cnh">CNH:</label>
          <input
            required
            id="cnh"
            type="text"
            placeholder="Insira sua CNH"
          ></input>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </WrapperModal>
  );
};

