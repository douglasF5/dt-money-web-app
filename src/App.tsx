import { Header } from "./components/Header";
import { Main } from "./components/Main";
import Modal from "react-modal";
import { Reset, GlobalCustomProperties } from "./styles/GlobalStyles";
import { useState } from "react";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Main />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Add transaction</h2>
      </Modal>
      <Reset />
      <GlobalCustomProperties />
    </>
  );
}
