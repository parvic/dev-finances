import React from 'react';

import * as S from './style';

interface Row {
  category: string;
  description: string;
  value: number;
  date: string;
  icon: string;
}

const TableRow = (row: Row) => {
  return (
    <S.Row>
      <td className="description">{row.description}</td>
      <td className="expense">{row.value}</td>
      <td className="date">{row.date}</td>
      <td>
        <img src={row.icon} alt={row.category} />
      </td>
    </S.Row>
  );
};

export default TableRow;
