import './TableItem.css';
import React from 'react';

const TableItem = ({ data, despesa, valor }) => {
  return (
    <tr>
      <td>{data}</td>
      <td>{despesa}</td>
      <td>{valor}</td>
    </tr>
  );
};

export default TableItem;
