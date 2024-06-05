import styled from "@emotion/styled/macro"

const componetes = {
    h1: 'h1',
    body: 'p'
}

const estilos = {
    h1: `
        font-weight: 600;
        fint-size: 40px;
        line-height: 49px;
    `,
    body: `
        font-weight: 400;
        fint-size: 20px;
        line-height: 24px;
    `
}

export const Tipografia = ({ variante, componente, children }) => {
    const tag = componetes[componente]
    const ComponenteUtilizado = styled[tag] `${estilos[variante]}`

    return (<ComponenteUtilizado>
        {children}
    </ComponenteUtilizado>)
}