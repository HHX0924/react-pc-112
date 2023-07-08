import {makeAutoObservable} from "mobx";
import {http, setToken, getToken} from '@/utils/idnex';

class LoginStore {
    token = getToken() || ''
    constructor() {
        //响应式
        makeAutoObservable(this)
    }
    getToken = async ({ mobile, code }) => {
        // 调用登录接口
        const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
            mobile, code
        })
        // 存入token
        this.token = res.data.token
        //存入localstorage
        setToken(this.token)
    }

}

export default LoginStore