import React, { FormEvent, useContext } from "react";
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import Modal from "react-modal";
import { Container, TransactionsTypeContainer, RadioBox} from "./styles";
import { TransactionsContext } from "../../TransactionsContext";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = React.useState('');
  const [amount, setAmount] = React.useState(0);
  const [category, setCategory] = React.useState('');
  const [type, setType] = React.useState('deposit');

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();
    await createTransaction({
      title,
      amount,
      category,
      type,
    })
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e)=> setAmount(+e.target.value)}
        />

        <TransactionsTypeContainer>
          <RadioBox
            type="button"
            isActive={type === 'deposit'}
            onClick={()=> setType('deposit')}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === 'withdraw'}
            onClick={()=> setType('withdraw')}
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saída</span>
          </RadioBox>
        </TransactionsTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e)=> setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default NewTransactionModal;
