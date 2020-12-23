import 'styled-components'

interface ITheme {
    colors: IColors
}

interface IColors {
    background: {
        primary: string
        secondary: string
        tertiary: string
        quaternary: string
    }
    text: {
        primary: string
        secondary: string
        tertiary: string
        quaternary: string
    }
    error: string
    border: string
    hover: string
    scrollbarBG: string
    scrollbarFG: string
    accent: string
    button: {
        changeModeButton: {
            background: string
            text: string
        }
    }
    boxShadow: string
}

export const defaultTheme: ITheme = {
    colors: {
        background: {
            primary: '#fff',
            secondary: '#fcf7f7',
            tertiary: '#FF7262',
            quaternary: '#F7C3BC',
        },
        text: {
            primary: '#777777',
            secondary: '#ffffff',
            tertiary: '#999999',
            quaternary: '#F7C3BC',
        },
        error: '#FF7262',
        border: '#ededed',
        hover: '#999999',
        scrollbarBG: '#999999',
        scrollbarFG: '#cdcdcd',
        accent: 'teal',
        button: {
            changeModeButton: {
                background: '#cdcdcd',
                text: '#444444',
            },
        },
        boxShadow: '#F7C3BC',
    },
}

export const darkTheme: ITheme = {
    colors: {
        background: {
            primary: '#1c2037',
            secondary: '#2c3258',
            tertiary: '#2f4177',
            quaternary: '#ffffff',
        },
        text: {
            primary: '#ffffff',
            secondary: '#cdcdcd',
            tertiary: '#999999',
            quaternary: '#ffffff',
        },
        error: 'red',
        border: '#cdcdcd',
        hover: '#999999',
        scrollbarBG: '#999999',
        scrollbarFG: '#cdcdcd',
        accent: 'teal',
        button: {
            changeModeButton: {
                background: '#444444',
                text: '#cdcdcd',
            },
        },
        boxShadow: '#cdcdcd',
    },
}
