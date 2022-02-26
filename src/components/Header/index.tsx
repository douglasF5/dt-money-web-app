import logoImg from "../../assets/logo.svg";
import { Container, ContentWrapper } from "./styles";
import { Button } from "../Atoms/Button";

type ButtonProps = {
  label: string;
};

export function Header() {
  return (
    <Container>
      <ContentWrapper>
        <img src={logoImg} alt="dt money" />
        <Button label="New transaction" />
      </ContentWrapper>
    </Container>
  );
}
