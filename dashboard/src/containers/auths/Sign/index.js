import AuthButton from '../../../components/auths/auth_button'
import AuthInput from '../../../components/auths/auth_input'
import SignLabel from '../../../components/auths/sign_label'
import React, { useState } from 'react';
import { useHistory } from 'react-router';

function SignContainer(){
    const [signUpData , setSignUpData] = useState({
        name : '',
        password : '' ,
        checkPassword : '',
    })
    const {name,password,checkPassword} = signUpData;
    let history = useHistory();

    const handleChangeInput =({target:{value},target:{name}})=>{
        setSignUpData({
            ...signUpData,
            [name]: value
        })
    }
    
    const handleClickSign=()=>{
        history.push('/')
    }
    return (
        <>
            <AuthInput placeholder='아이디' value={name} type='text'onChange={handleChangeInput} name='name'/>
            <AuthInput placeholder='비밀번호' value={password} type='password' onChange={handleChangeInput} name='password'/>
            <AuthInput placeholder='비밀번호 확인' value={checkPassword} type='password' name='checkPassword' onChange={handleChangeInput}/>
            <SignLabel flag = {password === checkPassword}/>
            <AuthButton onClick={handleClickSign}>회원가입</AuthButton>
        </>
    )
}

export default SignContainer;