export interface IEvent {
    title?: string
    participants?: IUser[] | string[]
    transaction?: ITransaction[] | string[]
}

export interface ITransaction {
    title?: string
    payer?: string
    participants?: string
    cost?: number
    currency?: string
    event?: string
}

export interface IUser {
    username?: string
}
