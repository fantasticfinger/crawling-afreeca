import React,{useContext} from 'react'; 
import BaseContext from '../Base'
import * as HeaderComponent from '../../../components/commons/header'

function HeaderCotainer (){
    const {state} = useContext(BaseContext);
    return (
        <HeaderComponent.HeaderWrapper>
            <HeaderComponent.WrapperUserBox>
                <HeaderComponent.UserBoxInfo>{state.name}</HeaderComponent.UserBoxInfo>
                <HeaderComponent.UserBoxInfo><button>로그아웃</button></HeaderComponent.UserBoxInfo>
            </HeaderComponent.WrapperUserBox>
        </HeaderComponent.HeaderWrapper>
    )
}

export default HeaderCotainer