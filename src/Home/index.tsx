import React from 'react';

import * as S from './style';
import logo from '../assets/logo.svg';
import income from '../assets/income.svg';
import expense from '../assets/expense.svg';
import total from '../assets/total.svg';
import Card from '../components/Card';
import Table from '../components/Table';
import Modal from '../components/Modal';

const Home = () => {
  return (
    <S.Wrapper>
      <header>
        <img src={logo} alt="Logo Dev Finance" />
      </header>

      <main>
        <S.Balance>
          <h2 className="sr-only">Balance Sheet</h2>
          <Card id="income" title="Income" icon={income} value={5000} />

          <Card id="expense" title="Expense" icon={expense} value={2000} />

          <Card id="total" title="Total" icon={total} value={3000} />
        </S.Balance>

        <Table />
      </main>

      <footer>
        <p>dev.finance$</p>
      </footer>

      <Modal />
    </S.Wrapper>
  );
};

export default Home;
