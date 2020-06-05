import React from 'react';
import styled from 'styled-components';

const UserBoxInfo = styled.div`
    width: 80px;
    height: 40px;
    display:flex;
    justify-content:center;
    align-items:center;
`

function userBox_info ({children}){
    return (
        <UserBoxInfo>
            <div>
                {children}
            </div>
        </UserBoxInfo>
    )
}

export default userBox_info