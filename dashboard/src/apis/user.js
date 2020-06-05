import axios from 'axios'
const url = 'localhost:8080/auth'

export const join = (name,password) =>{
    return new Promise((resolve,reject) =>{
        const data = new FormData();
        data.append(name)
        data.append(password)
        const res = axios({
            method : 'post',
            url,
            data,
            headers : {
                'Content-type' : 'application/json;charset:utf-8',
            }
        }).then(res => res.data)
        resolve(res);
    })
}