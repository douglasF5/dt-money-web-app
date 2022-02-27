import { Container } from "./styles";

export function TransactionsTable() {
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td>Apr 13, 2021</td>
            <td>
              <span>Sales</span>
            </td>
            <td>R$ 12.000,00</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>Apr 13, 2021</td>
            <td>
              <span>Sales</span>
            </td>
            <td>R$ 12.000,00</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>Apr 13, 2021</td>
            <td>
              <span>Sales</span>
            </td>
            <td>R$ 12.000,00</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
