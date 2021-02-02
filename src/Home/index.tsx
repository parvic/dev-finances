import React from 'react';

import * as S from './style';
import logo from '../assets/logo.svg';
import income from '../assets/income.svg';
import expense from '../assets/expense.svg';
import minus from '../assets/minus.svg';
import total from '../assets/total.svg';
import Card from '../components/Card';
import Table from '../components/Table';

const Home = () => {
  const close = () => {
    document.querySelector('.modal-overlay')?.classList.remove('active');
  };

  return (
    <S.Wrapper>
      <header>
        <img src={logo} alt="Logo Dev Finance" />
      </header>

      <main>
        <section id="balance">
          <h2 className="sr-only">Balance Sheet</h2>
          <Card id="income" title="Income" icon={income} value={5000} />

          <Card id="expense" title="Expense" icon={expense} value={2000} />

          <Card id="total" title="Total" icon={total} value={3000} />
        </section>

        <Table />
      </main>

      <div className="modal-overlay">
        <div className="modal">
          <div id="form">
            <h2>New Transactions</h2>
            <form action="">
              <div className="input-group">
                <label className="sr-only" htmlFor="description">
                  <input type="text" />
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Description"
                />
              </div>

              <div className="input-group">
                <label className="sr-only" htmlFor="amount">
                  <input type="text" />
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  placeholder="U$  0,00"
                  step="0.01"
                />
                <small className="help">
                  Use o sinal - (negativo) para desepesas e , (vírgula) para
                  casas decimais.
                </small>
              </div>

              <div className="input-group">
                <label className="sr-only" htmlFor="date">
                  <input type="text" />
                </label>
                <input type="date" id="date" name="date" />
              </div>

              <div className="input-group actions">
                <button className="button cancel" type="button" onClick={close}>
                  Cancel
                </button>
                <button className="button save" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer>
        <p>dev.finance$</p>
      </footer>
    </S.Wrapper>
  );
};

export default Home;
