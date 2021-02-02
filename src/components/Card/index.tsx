import React from 'react';
import * as S from './style';
import income from '../../assets/income.svg';

interface Card {
  id: string;
  value: number;
  title: string;
  icon: string;
}

const Card = (card: Card) => {
  return (
    <S.Card id={card.id}>
      <h3>
        <span>{card.title}</span>
        <img src={card.icon} alt={card.title} />
      </h3>
      <p>${card.value}</p>
    </S.Card>
  );
};

export default Card;
