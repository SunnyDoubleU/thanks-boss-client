import axios from 'axios'

export const apiEvent = {
    getAllEvents: () => {
        return axios({
            method: 'GET',
            url: 'http://localhost:8080/api/getAllEvents',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
        })
    },
}
