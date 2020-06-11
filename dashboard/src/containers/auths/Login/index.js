import React, { useState, useCallback, useEffect,useContext,useMemo } from 'react';
// import {useDispatch} from 'react-redux'; 
// import {setLogin} from '../../../modules/base'
import AuthButton from '../../../components/auths/auth_button'
import AuthInput from '../../../components/auths/auth_input'
import { useHistory } from "react-router-dom"
import BaseContext from '../../../containers/commons/Base'
import {login} from '../../../apis/auth'

const LoginContainer = ({children})=>{
    const [info,setInfo] = useState({
        name : '',
        password:'',
    })
    const {state,actions}= useContext(BaseContext);
    const {name,password} = info;

    const history = useHistory()
    useEffect(()=>{
        console.log('render');
    },[])

    const handleInputChange = useCallback(({target:{value},target:{name}})=>{
        setInfo({
            ...info,
            [name] : value
        })
    },[info])
    
    const handleSubmit = async() =>{
        // const res = await login(name,password);
        // if(res.logged){
        // }
        actions.setName(name);
        actions.setLogged(true);
        history.push('/main/home')
    }
    const handleSign = ()=>{
        history.push('/sign')
    }
    
    return (
        <>
            <AuthInput placeholder="아이디" type="text" value ={name} onChange={handleInputChange} name='name'/>
            <AuthInput placeholder="비밀번호" type="password" value={password} onChange={handleInputChange} name='password'/>
            <AuthButton onClick={handleSubmit} >로 그 인</AuthButton> 
            <AuthButton onClick={handleSign}>회원가입</AuthButton> 
            {children}
        </>
    )
}

export default LoginContainer;