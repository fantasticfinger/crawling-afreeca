import axios from 'axios'
const url = 'http://localhost:8080/auth'


export const login = async(name,password)=>{
    // return new Promise(async(resolve,reject)=>{
        const data = new FormData();
        data.append('name',name)
        data.append('password',password)
        return await axios.post({
            url : url,
            data :data,
            withCredentials:true,
            headers:{
                'Content-Type':'application/json;charset-utf-8',
                'Access-Control-Allow-Origin':'*',
            }
        }).then(res => res.data)
    //     resolve(res)
    // })
    
}

