import 'styled-components'

interface ITheme {
    colors: IColors
}

interface IColors {
    background: {
        primary: string
        secondary: string
        tertiary: string
    }
    text: {
        primary: string
        secondary: string
        tertiary: string
        quaternary: string
    }
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
}

export const defaultTheme: ITheme = {
    colors: {
        background: {
            primary: '#fff',
            secondary: '#fcf7f7',
            tertiary: '#FF7262',
        },
        text: {
            primary: '#777777',
            secondary: '#ffffff',
            tertiary: '#999999',
            quaternary: '#F7C3BC',
        },
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
    },
}

export const darkTheme: ITheme = {
    colors: {
        background: {
            primary: '#1c2037',
            secondary: '#2c3258',
            tertiary: '#2f4177',
        },
        text: {
            primary: '#ffffff',
            secondary: '#cdcdcd',
            tertiary: '#999999',
            quaternary: '#ffffff',
        },
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
    },
}
