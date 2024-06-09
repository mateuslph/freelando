import { ThemeProvider } from '@emotion/react'

const tema = {
    cores: {
        branco: '#FFF',
        atencao: '',
        focus: '#BF00FF',
        primarias: {
            a: '#5754ed',
            b: '#FF0000',
            c: ''
        },
        secundarias: {
            a: '#e8eaf9',
            b: '',
            c: ''
        },
        neutras: {
            a: '#373737',
            b: '',
            c: '',
            d: ''
        },
        dark: {
            a: '',
            b: '#B81515',
            c: '',
            d: '#D456FE'
        }
    },
    espacamentos: {
        xs: '8px',
        s: '16px',
        l: '32px'
    },
    fontFamily: "'Montserrat', sans-serif"
}

export const ProvedorTema = ({ children }) => {
    return (<ThemeProvider theme={tema}>
        { children }
    </ThemeProvider>)
}