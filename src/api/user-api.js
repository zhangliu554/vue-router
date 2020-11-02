import { baseServer } from '../utils/http-request-methods'
export default class LoginApi {
    //获取用户权限
    static getUserPrivilege(data) {
        return baseServer('/user/getUserPrivilege', data)
    }
    static getUserinfo(data) {
        return baseServer('/user/getUserinfo', data)
    }
}