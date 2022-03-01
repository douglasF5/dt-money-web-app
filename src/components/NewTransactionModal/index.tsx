import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { Global } from "../../styles/GlobalStyles";
import { CardIcon, CloseIcon } from "../Atoms/Icons";
import { useState } from "react";

interface NewTrasactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTrasactionModalProps) {
  const [transactionType, setTransactionType] = useState("income");

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <Container>
        <button className="close-button" type="button" onClick={onRequestClose}>
          <CloseIcon />
        </button>
        <h2>New transaction</h2>
        <div className="inputs-wrapper">
          <input placeholder="Title" type="text" />
          <input placeholder="Amount" type="number" />

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

          <input placeholder="Category" type="text" />
        </div>
        <button type="submit">Add transaction</button>
      </Container>
      <Global />
    </Modal>
  );
}
