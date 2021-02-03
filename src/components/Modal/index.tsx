import React from 'react';
import * as S from './style';

const Modal = () => {
  const close = () => {
    document.querySelector('.modal-overlay')?.classList.remove('active');
  };

  return (
    <S.ModalOverlay className="modal-overlay">
      <S.Modal>
        <div id="form">
          <h2>New Transactions</h2>
          <form action="">
            <S.InputGroup>
              <label className="sr-only" htmlFor="description">
                <input type="text" />
              </label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Description"
              />
            </S.InputGroup>

            <S.InputGroup>
              <label className="sr-only" htmlFor="amount">
                <input type="text" />
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="U$  0,00"
                step="0.01"
              />
              <small className="help">
                Use o sinal - (negativo) para desepesas e , (vírgula) para casas
                decimais.
              </small>
            </S.InputGroup>

            <S.InputGroup>
              <label className="sr-only" htmlFor="date">
                <input type="text" />
              </label>
              <input type="date" id="date" name="date" />
            </S.InputGroup>

            <S.ButtonGroup className="actions">
              <S.CancelButton type="button" onClick={close}>
                Cancel
              </S.CancelButton>
              <S.SaveButton type="submit">Save</S.SaveButton>
            </S.ButtonGroup>
          </form>
        </div>
      </S.Modal>
    </S.ModalOverlay>
  );
};

export default Modal;
