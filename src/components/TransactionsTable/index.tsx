import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(new Date(transaction.createdAt))}
              </td>
              <td>
                <span>{transaction.category}</span>
              </td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
