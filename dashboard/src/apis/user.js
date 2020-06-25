import axios from 'axios'

const url = 'localhost:8080/auth'

const join = async (name, password) => {
    const data = new FormData();
    data.append(name)
    data.append(password)
    const res = await axios({
        method: 'post',
        url,
        data,
        headers: {
            'Content-type': 'application/json;charset:utf-8',
        }
    })
    return res.data;
}

export default join;