import styled from 'styled-components';

export const ModalOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  visibility: hidden;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  /* FORM ====================== */

  #form h2 {
    margin-top: 0;
  }
`;

export const Modal = styled.div`
  position: relative;
  z-index: 2;

  width: 90%;
  max-width: 500px;
  background-color: #f0f2f5;
  padding: 2.4rem;
`;

export const InputGroup = styled.div`
  margin-top: 0.8rem;

  input {
    width: 100%;
    border: none;
    border-radius: 0.2rem;

    padding: 0.8rem;
  }

  small {
    opacity: 0.4;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 0.8rem;

  &.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 48%;
    }
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  height: 50px;

  color: #e92929;
  border: 2px #e92929 solid;
  outline: none;

  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

export const SaveButton = styled.button`
  width: 100%;
  height: 50px;

  color: white;
  background-color: #49aa26;
  border: none;

  &:hover {
    background-color: #3dd705;
  }
`;
