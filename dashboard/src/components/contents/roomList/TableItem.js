import React from 'react';
import styled from 'styled-components'

const TableRow = styled.div`
    display:grid;
    grid-template-columns : 1fr 5fr 3fr;
    height: 35px;
    border-bottom: 1px solid #dee2e6;
    padding-top:10px;
`

const TableItem = ({items})=>{
    return items.map((item,i) =>{
        const {id,idx} = item;
        return(
            <TableRow>
                <div>{i+1}</div>
                <div>{id}</div>
                <div>{idx.data}</div>
            </TableRow>
        )
    })
}

export {TableRow};
export default TableItem