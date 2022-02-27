import { Container } from "./styles";
import { CardStats } from "../CardStats";

export function Stats() {
  return (
    <Container>
      <CardStats title="Income" amount={17400} />
      <CardStats title="Expenses" amount={17400} />
      <CardStats title="Balance" amount={17400} dynamicColor={true} />
    </Container>
  );
}
