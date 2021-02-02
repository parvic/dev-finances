import styled from 'styled-components';

export const Transaction = styled.section`
  width: 100%;
  display: block;
  overflow-x: auto;

  button {
    display: inline-block;
    margin-bottom: 0.8rem;
  }

  #data-table {
    width: 100%;
    border-spacing: 0 0.5rem;
    color: #969cb3;
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

  #data-table thead th:last-child,
  #data-table tbody td:last-child {
    border-radius: 0 0.25rem 0.25rem 0;
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

  #data-table td.expense {
    color: #e92929;
  }
`;
