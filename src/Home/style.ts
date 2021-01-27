import styled from 'styled-components';

export const Wrapper = styled.div`
  header {
    background-color: #2d4a22;
    padding: 2rem 0 10rem;
    text-align: center;
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

  .container {
    width: min(90vw, 800px);
    margin: auto;
  }

  #balance {
    margin-top: -8rem;
  }

  #balance h2 {
    color: white;
    margin-top: 0;
  }

  /* CARDS */

  .card {
    background-color: white;
    padding: 1.5rem 2rem;
    margin-bottom: 2rem;
    border-radius: 0.25rem;

    color: #363f5f;
  }

  .card h3 {
    font-weight: normal;
    font-size: 1rem;
  }

  .card p {
    font-size: 2rem;
    line-height: 3rem;

    margin-top: 1rem;
  }

  .card.total {
    background-color: #49aa26;
    color: #fff;
  }

  /* TABLE */
  #data-table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  #data-table thead th {
    padding: 1rem 2rem;
    text-align: left;
    font-weight: normal;
    color: #363f5f;
  }
  #data-table tr {
    background-color: #fff;
  }

  #data-table tbody tr {
    opacity: 0.7;
  }

  #data-table tbody tr:hover {
    opacity: 1;
  }
  #data-table thead th:first-child,
  #data-table tbody td:first-child {
    border-radius: 0.25rem 0 0 0.25rem;
  }

  table tbody td {
    padding: 1rem 2rem;
  }

  #data-table td.description {
    color: #363f5f;
  }

  #data-table td.income {
    color: #49aa26;
  }

  #data-table td.outcome {
    color: #e92929;
  }

  footer {
    text-align: center;
    padding: 4rem 0 2rem;
    color: #363f5f;
    opacity: 0.6;
  }
`;
