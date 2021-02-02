import React from 'react';
import TableRow from '../TableRow';
import * as S from './style';

import income from '../../assets/income.svg';
import expense from '../../assets/expense.svg';
import minus from '../../assets/minus.svg';
import plus from '../../assets/plus.svg';
import total from '../../assets/total.svg';

const Table = () => {
  const open = () => {
    document.querySelector('.modal-overlay')?.classList.add('active');
  };

  return (
    <S.Transaction>
      <h2 className="sr-only">Transactions</h2>

      <button className="button new" type="button" onClick={open}>
        + New Transaction
      </button>

      <S.DataTable>
        <thead>
          <tr>
            <th>Description</th>
            <th>Value</th>
            <th>Date</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          <TableRow
            description="Internet"
            value={200}
            date="01/02/2021"
            category="Expense"
            icon={minus}
          />

          <TableRow
            description="Freelance"
            value={200}
            date="01/02/2021"
            category="Expense"
            icon={plus}
          />

          <TableRow
            description="Internet"
            value={200}
            date="01/02/2021"
            category="Expense"
            icon={minus}
          />
        </tbody>
      </S.DataTable>
    </S.Transaction>
  );
};
export default Table;
