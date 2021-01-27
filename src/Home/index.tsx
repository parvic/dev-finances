import React from 'react';

import * as S from './style';

const Home = () => {
  return (
    <S.Wrapper>
      <header>
        <h1 id="logo">dev.finance$</h1>
      </header>

      <main className="container">
        <section id="balance">
          <h2>Balance Sheet</h2>
          <div className="card">
            <h3>Income</h3>
            <p>$ 5000.00</p>
          </div>

          <div className="card">
            <h3>Outcome</h3>
            <p>$ 2000.00</p>
          </div>

          <div className="card total">
            <h3>Total</h3>
            <p>$ 3000.00</p>
          </div>
        </section>

        <section id="transaction">
          <h2>Transactions</h2>
          <table id="data-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Value</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="description">Energy</td>
                <td className="outcome">U$ 500</td>
                <td className="date">23/01/2021</td>
              </tr>

              <tr>
                <td className="description">Internet</td>
                <td className="income">U$ 200</td>
                <td className="date">25/01/2021</td>
              </tr>

              <tr>
                <td className="description">Groceries</td>
                <td className="outcome">U$ 800</td>
                <td className="date">05/01/2021</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      <footer>
        <p>dev.finance$</p>
      </footer>
    </S.Wrapper>
  );
};

export default Home;
