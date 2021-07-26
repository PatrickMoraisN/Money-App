import React from "react";
import closeImg from '../../assets/close.svg'
import Modal from "react-modal";
import { Container } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay" // Classe do overlay, tira do padrao vindo da biblioteca
      className="react-modal-content" // Classe do modal em si
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal de transacao" />
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>

        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default NewTransactionModal;
