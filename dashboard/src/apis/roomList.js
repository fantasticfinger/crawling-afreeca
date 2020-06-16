import axios from 'axios'; 
import datas from '../datas/RoomList.json';
const url = 'http://localhost:8080/contents'

export const getRoomList= async ({page,search}) =>{
    if (process.env.NODE_ENV === 'development') {
        return new Promise((resolve,reject)=>{
            resolve(datas);
        })
    }
    else{
        return await axios.get({
            url: `${url}/${page}${search === undefined? '' : '/'+search}`,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json;charset-utf-8',
                'Access-Control-Allow-Origin': '*',
            }
        }).then(res => res.data)
    }
}