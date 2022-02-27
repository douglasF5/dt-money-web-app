import { Stats } from "../Stats";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Main() {
  return (
    <Container>
      <Stats />
      <TransactionsTable />
    </Container>
  );
}
