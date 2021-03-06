import axios from 'axios'
import qs from 'qs'
import { IUser } from '../types'

export const apiAuthentication = {
    createUser: (user: IUser) => {
        return axios({
            method: 'POST',
            url: 'http://localhost:8080/api/createUser',
            data: qs.stringify(user),
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
        })
    },
    loginUser: (user: IUser) => {
        return axios({
            method: 'POST',
            url: 'http://localhost:8080/api/loginUser',
            data: qs.stringify(user),
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
        })
    },
    logoutUser: () => {
        return axios.get(`http://localhost:8080/api/logoutUser`)
    },
}
