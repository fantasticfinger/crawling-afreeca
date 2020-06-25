import axios from 'axios'

const url = 'http://localhost:8080/auth'

export const login = async ({ name, password }) => {
    if (process.env.NODE_ENV === 'development') {
        return new Promise((resolve, resject) => {
            const data = {
                logged: true,
                authority: 1,
                name
            }
            resolve(data);
        })
    }

    const data = new FormData();
    data.append('name', name)
    data.append('password', password)
    const res = await axios.post({
        url,
        data,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json;charset-utf-8',
            'Access-Control-Allow-Origin': '*',
        }
    })
    return res.data;

}

export const logout = async () => {
    if (process.env.NODE_ENV === 'development') {
        return new Promise((resolve) => {
            resolve(null);
        })
    }
    await axios.delete({
        url,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json;charset-utf-8',
            'Access-Control-Allow-Origin': '*',
        }
    });
    return null
}

export const checkLogin = async () => {
    if (process.env.NODE_ENV === 'development') {
        return new Promise((resolve, resject) => {
            const data = {
                logged: true,
                authority: 1,
                name: "test",
            }
            resolve(data);
        })
    }
    const res = await axios.get({
        url,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json;charset-utf-8',
            'Access-Control-Allow-Origin': '*',
        }
    });

    return res.data;
}

