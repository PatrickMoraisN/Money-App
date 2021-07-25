import React from 'react'
import Modal from 'react-modal';

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void,
}
const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {
  
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
  >
    testezin
  </Modal>
  )
}

export default NewTransactionModal;
