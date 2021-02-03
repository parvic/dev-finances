import styled from 'styled-components';

export const Wrapper = styled.div`
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

  main {
    width: min(90vw, 800px);
    margin: auto;
  }

  /* TRANSACTIONS ====================== */

  footer {
    text-align: center;
    padding: 4rem 0 2rem;
    color: #363f5f;
    opacity: 0.6;
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

export const Balance = styled.section`
  margin-top: -5rem;

  h2 {
    color: white;
    margin-top: 0;
  }
  @media (min-width: 800px) {
    & {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr; /* or repeat(3, 1fr) */
      gap: 2rem;
    }
  }
`;
