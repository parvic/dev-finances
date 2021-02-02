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
`;

export const InputGroup = styled.div`
  .input-group {
    margin-top: 0.8rem;
  }

  .input-group small {
    opacity: 0.4;
  }

  .input-group.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input-group.actions button {
    width: 48%;
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
