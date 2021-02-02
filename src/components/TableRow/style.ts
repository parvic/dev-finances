import styled from 'styled-components';

export const Row = styled.tr`
  align-items: center;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  td {
    padding: 0.5rem 2rem;

    img {
      display: flex;
      align-items: center;
    }

    &:first-child {
      border-radius: 0.25rem 0 0 0.25rem;
    }

    &:last-child {
      border-radius: 0 0.25rem 0.25rem 0;
    }

    &.description {
      color: #363f5f;
    }

    &.income {
      color: #49aa26;
    }

    &.expense {
      color: #e92929;
    }
  }
`;
