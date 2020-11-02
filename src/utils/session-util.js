/**
 * 封装 web端缓存
 */
import { Base64 } from 'js-base64'

class Session {
    static maxAgeTime = new Date().getTime() + 1000 * 3600 * 8; // session 过期时间

    static setLocalSession(key, value, maxAge) {
        try {
            const data = { value, maxAge: maxAge || this.maxAgeTime }
            localStorage.setItem(typeof key === 'string' ? key : JSON.stringify(key), Base64.encode(JSON.stringify(data)))
        } catch (error) {
            console.warn(error)
        }
    }
    static getLocalSession(key) {
        try {
            const date = new Date().getTime()
            const localdata = localStorage.getItem(typeof key === 'string' ? key : JSON.stringify(key));
            if(!localdata) return
            const sessionData = JSON.parse(Base64.decode(localdata))
            if (sessionData && sessionData.maxAge != null && sessionData.maxAge - date > 0 && sessionData.maxAge <= this.maxAgeTime) {
                this.setLocalSession(key, sessionData.value)
                return sessionData.value
            } else {
                return null
            }
        } catch (error) {
            console.warn(error)
        }
    }
    static removeSession(key) {
        localStorage.removeItem(typeof key === 'string' ? key : JSON.stringify(key))
    }
    static removeAllSession() {
        localStorage.clear()
    }
}


export default  Session