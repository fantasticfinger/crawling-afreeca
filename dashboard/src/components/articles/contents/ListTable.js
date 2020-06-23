/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import {TableRow} from './TableItem';
import colors from '../../../styles/colors';

const URL = '/main/room';
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 3fr;
  height: 35px;
  border-bottom: 1px solid ${colors.gray300};
  padding-top: 10px;
`;
const RoomsTable = styled.div`
  margin: 0 auto;
  position: relative;
  border: 1px solid ${colors.gray300};
  width: 95%;
  text-align: center;
`;
const TableRowTitle = styled(TableRow)`
  background-color: ${colors.gray300};
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
const TableTitle = () => {
  return (
    <TableRowTitle>
      <div>글번호</div>
      <div>BJ명</div>
      <div>방송시작시간</div>
    </TableRowTitle>
  );
};
const ListTable = ({ items }) => {
  return (
    <RoomsTable>
      <TableTitle />
      <TableItem items={items} />
    </RoomsTable>
  );
};

export default ListTable;
