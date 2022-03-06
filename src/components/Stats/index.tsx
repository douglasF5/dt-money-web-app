import { Container } from "./styles";
import { CardStats } from "../CardStats";
import { useTransactions } from "../../hooks/useTransactions";

export function Stats() {
  const { transactions } = useTransactions();

  const stats = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.amount;
        acc.balance += transaction.amount;
      } else {
        acc.expenses += transaction.amount;
        acc.balance += transaction.amount;
      }

      return acc;
    },
    {
      income: 0,
      expenses: 0,
      balance: 0,
    }
  );

  return (
    <Container>
      <CardStats title="Income" amount={stats.income} />
      <CardStats title="Expenses" amount={stats.expenses} />
      <CardStats title="Balance" amount={stats.balance} dynamicColor={true} />
    </Container>
  );
}
