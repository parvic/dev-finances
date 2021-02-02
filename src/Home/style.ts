import styled from 'styled-components';

export const Wrapper = styled.div`
  html {
    font-size: 93.75%;
  }

  header {
    background-color: #2d4a22;
    padding: 2rem 0 10rem;
    text-align: center;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  h2 {
    margin-top: 3.2rem;
    margin-bottom: 0.8rem;

    color: #363f5f;
    font-weight: normal;
  }

  #logo {
    color: #fff;
    font-weight: 100;
  }

  main {
    width: min(90vw, 800px);
    margin: auto;
  }

  #balance {
    margin-top: -5rem;
  }

  #balance h2 {
    color: white;
    margin-top: 0;
  }

  /* TRANSACTIONS ====================== */

  button {
    border: none;
    border-radius: 0.25rem;
    outline: none;

    color: #49aa26;
    text-decoration: none;
    /* font-size: 16px; */

    cursor: pointer;
  }

  button:hover {
    color: #3dd705;
  }

  button.new {
    display: inline-block;
    margin-bottom: 0.8rem;
  }

  .button.save {
    width: 100%;
    height: 50px;

    color: white;
    background-color: #49aa26;
  }

  .button.save:hover {
    background-color: #3dd705;
  }

  .button.cancel {
    width: 100%;
    height: 50px;

    color: #e92929;
    border: 2px #e92929 solid;
    border-radius: 0.25rem;

    opacity: 0.6;
    /* align-items: center;
    justify-content: center; */
  }

  button.cancel:hover {
    opacity: 1;
  }

  footer {
    text-align: center;
    padding: 4rem 0 2rem;
    color: #363f5f;
    opacity: 0.6;
  }

  /* MODAL ====================== */

  .modal-overlay {
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
  }

  .modal-overlay.active {
    opacity: 1;
    visibility: visible;
  }

  .modal {
    position: relative;
    z-index: 2;

    width: 90%;
    max-width: 500px;
    background-color: #f0f2f5;
    padding: 2.4rem;
  }

  /* FORM ====================== */

  #form {
  }

  #form h2 {
    margin-top: 0;
  }

  input {
    width: 100%;
    border: none;
    border-radius: 0.2rem;

    padding: 0.8rem;
  }

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

  /* RESPONSIVE */
  @media (min-width: 800px) {
    html {
      font-size: 87.5%;
    }

    #balance {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr; /* or repeat(3, 1fr) */
      gap: 2rem;
    }
  }
`;
