import styled from 'styled-components';

export const Transaction = styled.section`
  width: 100%;
  display: block;
  overflow-x: auto;

  button {
    display: inline-block;
    margin-bottom: 0.8rem;
    border: none;
    outline: none;

    color: #49aa26;
    text-decoration: none;

    cursor: pointer;

    &:hover {
      color: #3dd705;
    }
  }
`;

export const DataTable = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
  color: #969cb3;

  tr {
    background-color: #fff;
  }

  th {
    padding: 1rem 2rem;
    text-align: left;
    font-weight: normal;
    color: #363f5f;

    &:first-child {
      border-radius: 0.25rem 0 0 0.25rem;
    }

    &:last-child {
      border-radius: 0 0.25rem 0.25rem 0;
    }
  }
`;
