import http from './http'
// import store from '@/store'
import { BASE_SERVER_API} from '../config/http-url'


export const baseServer = (url, data = null) => {
    return http({
        url: `${BASE_SERVER_API}${url}`,
        method: "POST",
        data
    })
}