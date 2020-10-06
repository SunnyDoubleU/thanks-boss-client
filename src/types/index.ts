export interface IEvent {
    title?: string
    participants?: IUser[]
    transaction?: ITransaction[] | string[]
}

export interface ITransaction {
    title?: string
    payer?: string
    participants?: IUser[]
    cost?: number
    currency?: string
    event?: string
}

export interface IUser {
    username?: string
}
