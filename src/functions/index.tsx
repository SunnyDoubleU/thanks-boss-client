import { IUser } from '../types'

export const setUser = (user: IUser) => {
    localStorage.setItem('user', JSON.stringify(user))
}

export const logoutUser = () => {
    localStorage.removeItem('user')
}

export const getUser = () => {
    const storageUser = localStorage.getItem('user')
    const parsedUser = storageUser === null ? null : JSON.parse(storageUser)
    return parsedUser
}
