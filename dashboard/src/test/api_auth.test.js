
import axios from 'axios'
import * as apis from '../apis/auth'
jest.mock('axios');
test('login',async ()=>{
    axios.post= jest.fn().mockResolvedValue({
        data : {
            logged:true,
            authority: 1,
        }
    })
    const res = await apis.login('test','test')
    expect(res).toHaveProperty('logged',true)
    expect(res).toHaveProperty('authority',1)
})
