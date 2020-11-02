import { baseServer } from '../utils/http-request-methods'
export default class LoginApi {
    static login(data) {
        return baseServer('/user/login', data)
    }
    static loginOut(data) {
        return baseServer('/user/login', data)
    }
}