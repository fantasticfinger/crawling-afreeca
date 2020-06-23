/* eslint-disable radix */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../../styles/colors';

const PagenationWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 520px;
  .currentPage {
    background-color: ${colors.violet300};
  }
`;
const PageNumberDiv = styled.div`
  width: 30px;
  flex: 0 0 auto;
  height: 30px;
  border: 1px solid ${colors.gray200};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;
  > a {
    text-decoration: none;
  }
`;

const PageNumbers = ({ currentPage, lastPage, link, search }) => {
  const arr = [];
  const startNumber = parseInt((currentPage - 1) / 10) * 10 + 1;
  const endNumber = Math.min(startNumber + 9, lastPage);
  const query = search === undefined ? '' : `/${search}`;
  if (startNumber !== 1) {
    const prevNumber = startNumber - 10;
    arr.push(
      <PageNumberDiv key={`prev${prevNumber}`}>
        <Link to={`${link}/${prevNumber}${query}`}>{'<'}</Link>
      </PageNumberDiv>,
    );
  }

  for (let i = startNumber; i <= endNumber; i += 1) {
    arr.push(
      <PageNumberDiv
        key={`page${i}`}
        className={i === currentPage ? 'currentPage' : ''}
      >
        <Link to={`${link}/${i}${query}`}>{i}</Link>
      </PageNumberDiv>,
    );
  }
  if (endNumber < lastPage) {
    const nextNumber = endNumber + 1;
    arr.push(
      <PageNumberDiv key={`prev${nextNumber}`}>
        <Link to={`${link}/${nextNumber}${query}`}>{'>'}</Link>
      </PageNumberDiv>,
    );
  }
  return arr;
};
function Pagenation({ ...rest }) {
  return (
    <PagenationWrapper>
      <PageNumbers {...rest} />
    </PagenationWrapper>
  );
}

export default Pagenation;
