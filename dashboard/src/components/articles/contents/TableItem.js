/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../../styles/colors';

const URL = '/main/room';
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 3fr;
  height: 35px;
  border-bottom: 1px solid ${colors.gray300};
  padding-top: 10px;
`;

const TableItem = ({ items }) => {
  return items.map((item, idx) => {
    const { id, date, uid } = item;
    return (
      <Link to={`${URL}/${id}`} key={`table${idx}`}>
        <TableRow>
          <div>{id}</div>
          <div>{uid}</div>
          <div>{date}</div>
        </TableRow>
      </Link>
    );
  });
};

export { TableRow };
export default TableItem;
