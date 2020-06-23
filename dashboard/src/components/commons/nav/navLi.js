/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLi = styled.li`
  display: flex;
  text-indent: 30px;
  align-items: center;
  position: relative;
  height: 40px;
  &:hover {
    background-color: white;
  }
  & + & {
    margin-top: 10px;
  }
`;
function navLi({ children, cn, link, ...rest }) {
  return (
    <Link to={link}>
      <NavLi {...rest}>
        <i className={cn} />
        {children}
      </NavLi>
    </Link>
  );
}

export default React.memo(navLi);
