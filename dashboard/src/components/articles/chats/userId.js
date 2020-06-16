import React from 'react'
import styled from 'styled-components'

const UserIdFiled = styled.div`
    text-align:center;
    padding: 0 10px;
    height: 25px;
`

const UserId = ({ list }) => {
    return list.map((id, idx) => {
        return <UserIdFiled key={id + idx}>{id}</UserIdFiled>
    })
}

export { UserIdFiled };
export default React.memo(UserId);