import styled from 'styled-components'
import colors from '../../../styles/colors'
import React from 'react'
const SearchButton = styled.button`
    width:40px;
    height:27px;
    background-color : ${colors.violet200};
    border: 0;
`

const SearchInput = styled.input`
    width: 150px;
    height : 23px;
    outline: none;
    text-indent: 5px;
    font-size:12px;
    border: 0;
    border-bottom : 1px solid ${colors.gray300};
`

const SearchBox = ({ onChange, onClick, value, name }) => {
    return (
        <>
            <SearchInput onChange={onChange} value={value} name={name} />
            <SearchButton onClick={onClick}>찾기</SearchButton>
        </>
    )
}

export default React.memo(SearchBox);