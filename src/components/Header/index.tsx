import logoImg from "../../assets/logo.svg";
import { Container, ContentWrapper } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <ContentWrapper>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          New transaction
        </button>
      </ContentWrapper>
    </Container>
  );
}
