import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

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
            <td className="income">R$ 12.000,00</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td>Mar 27, 2021</td>
            <td>
              <span>House</span>
            </td>
            <td className="expense">- R$ 1.200,00</td>
          </tr>
          <tr>
            <td>Groceries</td>
            <td>Apr 10, 2021</td>
            <td>
              <span>Food</span>
            </td>
            <td className="expense">R$ 150,00</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
