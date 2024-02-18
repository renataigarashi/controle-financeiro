import './Table.css';
import React from 'react';
import TableItem from '../TableItem/TableItem';

const Table = ({ rows }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Despesa</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <TableItem
              key={index}
              data={row.data}
              despesa={row.despesa}
              valor={row.valor}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
