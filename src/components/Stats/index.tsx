import { Container } from "./styles";
import incomeIcon from "../../assets/income.svg";

export function Stats() {
  return (
    <Container>
      <div>
        <header>
          <h2>Income</h2>
          <img src={incomeIcon} alt="Income" />
        </header>
        <strong>R$ 1000.00</strong>
      </div>
    </Container>
  );
}
