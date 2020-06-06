import React,{useMemo} from 'react';
import styled from 'styled-components'
import colors from '../../styles/colors'

const PagenationWrapper =  styled.div`
    display : flex;
    margin: 0 auto;
    width: 520px;
`
const PageNumberDiv = styled.div`
    width : 30px;
    flex : 0 0 auto;
    height : 30px;
    border : 1px solid ${colors.gray200};
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 10px 10px;
    >a{
        text-decoration:none;
    }
`
const PageNumbers = ({start,end,link})=>{
    let arr = [] ;
    for(let i = start; i <=end ; i ++){
        arr.push(
            <PageNumberDiv>
                <a href='#'>{i}</a>
            </PageNumberDiv>
        )
    }

    return arr;
}
 function Pagenation({currentPage,lastPage,link}){
    return(
        <PagenationWrapper>
            <PageNumbers currentPage ={currentPage} lastPage ={lastPage}/>
        </PagenationWrapper>
    )
}

export default Pagenation