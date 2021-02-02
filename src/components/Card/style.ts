import styled from 'styled-components';

export const Card = styled.div`
  background-color: white;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;
  border-radius: 0.25rem;

  color: #363f5f;

  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-weight: normal;
    font-size: 1rem;
  }

  p {
    font-size: 2rem;
    line-height: 3rem;

    margin-top: 1rem;
  }

  &#total {
    background-color: #49aa26;
    color: #fff;
  }
`;
