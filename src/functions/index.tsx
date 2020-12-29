import { IUser } from '../types'

export const setUser = (user: IUser) => {
    localStorage.setItem('user', JSON.stringify(user))
}

export const logoutUser = () => {
    localStorage.removeItem('user')
}
