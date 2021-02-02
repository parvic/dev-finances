import React from 'react';
import * as S from './style';

interface Table {
  category: string;
  description: string;
  value: number;
  date: string;
  icon: string;
}

const Table = (table: Table) => {
  return (
    <S.Transaction>
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
            <td className="description">{table.description}</td>
            <td className="expense">{table.value}</td>
            <td className="date">{table.date}</td>
            <td>
              <img src={table.icon} alt={table.category} />
            </td>
          </tr>

          <tr>
            <td className="description">{table.description}</td>
            <td className="expense">{table.value}</td>
            <td className="date">{table.date}</td>
            <td>
              <img src={table.icon} alt={table.category} />
            </td>
          </tr>

          <tr>
            <td className="description">{table.description}</td>
            <td className="expense">{table.value}</td>
            <td className="date">{table.date}</td>
            <td>
              <img src={table.icon} alt={table.category} />
            </td>
          </tr>
        </tbody>
      </table>
    </S.Transaction>
  );
};
export default Table;
