import { Container, Wrapper } from "./LogOut.Styled";
import LogoOut from "../../assets/Logo-10.svg";
import { Door } from "phosphor-react";


export const LogOut: React.FC = () => {
  return (
    <Container>
      <img src={LogoOut} alt="" />
      <Wrapper>
      <Door size={100} weight="bold" />
      </Wrapper>
      <button type="submit">Sair</button>
    </Container>
  );
};