import React from 'react';

import * as S from './style';
import logo from '../assets/logo.svg';
import income from '../assets/income.svg';
import expense from '../assets/expense.svg';
import minus from '../assets/minus.svg';
import total from '../assets/total.svg';

const Home = () => {
  return (
    <S.Wrapper>
      <header>
        <img src={logo} alt="Logo Dev Finance" />
      </header>

      <main className="container">
        <section id="balance">
          <h2 className="sr-only">Balance Sheet</h2>
          <div className="card">
            <h3>
              <span> Income</span>
              <img src={income} alt="Income" />
            </h3>
            <p>$ 5000.00</p>
          </div>

          <div className="card">
            <h3>
              <span>Expense</span>
              <img src={expense} alt="Expense" />
            </h3>
            <p>$ 2000.00</p>
          </div>

          <div className="card total">
            <h3>
              <span>Total</span>
              <img src={total} alt="Total" />
            </h3>
            <p>$ 3000.00</p>
          </div>
        </section>

        <section id="transaction">
          <h2 className="sr-only">Transactions</h2>

          <button className="button new" type="button">
            + New Transaction
          </button>

          <table id="data-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Value</th>
                <th>Date</th>
                <th> </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="description">Energy</td>
                <td className="expense">U$ 500</td>
                <td className="date">23/01/2021</td>
                <td>
                  <img src={minus} alt="minus" />
                </td>
              </tr>

              <tr>
                <td className="description">Internet</td>
                <td className="income">U$ 200</td>
                <td className="date">25/01/2021</td>
                <td>
                  <img src={minus} alt="minus" />
                </td>
              </tr>

              <tr>
                <td className="description">Groceries</td>
                <td className="expense">U$ 800</td>
                <td className="date">05/01/2021</td>
                <td>
                  <img src={minus} alt="minus" />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      <div className="modal-overlay active">
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
                <button className="button cancel" type="button">
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
