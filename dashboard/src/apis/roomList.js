import axios from 'axios';
import datas from '../datas/RoomList.json';

const url = 'http://localhost:8080/contents';

// eslint-disable-next-line import/prefer-default-export
export const getRoomList = async ({ page, search }) => {
    if (process.env.NODE_ENV === 'development') {
        return new Promise((resolve, reject) => {
            resolve(datas);
        });
    }
    const res = await axios
        .get({
            url: `${url}/${page}${search === undefined ? '' : `/${search}`}`,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json;charset-utf-8',
                'Access-Control-Allow-Origin': '*',
            },
        });
    return res.data;

};
