import { FormEvent, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { Global } from "../../styles/GlobalStyles";
import { CardIcon, CloseIcon } from "../Atoms/Icons";

interface NewTrasactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTrasactionModalProps) {
  const { createTransaction } = useTransactions();

  const [transactionTitle, setTransactionTitle] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("income");
  const [transactionCategory, setTransactionCategory] = useState("");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title: transactionTitle,
      amount:
        transactionType === "income"
          ? transactionAmount
          : transactionAmount * -1,
      category: transactionCategory,
      type: transactionType,
    });

    setTransactionTitle("");
    setTransactionAmount(0);
    setTransactionType("income");
    setTransactionCategory("");

    onRequestClose();
  }

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <button className="close-button" type="button" onClick={onRequestClose}>
          <CloseIcon />
        </button>
        <h2>New transaction</h2>
        <div className="inputs-wrapper">
          <input
            placeholder="Title"
            type="text"
            value={transactionTitle}
            onChange={(e) => setTransactionTitle(e.target.value)}
          />
          <input
            placeholder="Amount"
            type="number"
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(Number(e.target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              className="income"
              isActive={transactionType === "income"}
              onClick={() => setTransactionType("income")}
            >
              <CardIcon iconName="Income" size="1.5rem" />
              <span>Income</span>
            </RadioBox>

            <RadioBox
              type="button"
              className="expenses"
              isActive={transactionType === "expense"}
              onClick={() => setTransactionType("expense")}
            >
              <CardIcon iconName="Expenses" size="1.5rem" />
              <span>Expenses</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input
            placeholder="Category"
            type="text"
            value={transactionCategory}
            onChange={(e) => setTransactionCategory(e.target.value)}
          />
        </div>
        <button type="submit">Add transaction</button>
      </Container>
      <Global />
    </Modal>
  );
}
