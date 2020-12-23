import axios from 'axios'
import qs from 'qs'

export const apiAuthentication = {
    createUser: (email: string, password: string) => {
        return axios({
            method: 'POST',
            url: 'http://localhost:8080/api/createUser',
            data: qs.stringify({ email, password }),
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
        })
    },
}
