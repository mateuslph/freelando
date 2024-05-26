import styled from "@emotion/styled"

const DivEstilizada = styled.div`
    padding: ${props => props.theme.cores.espacamentos.l};
    border-radius: ${props => props.theme.cores.espacamentos.s};
    border: 1px solid;
    border-color: ${props => props.theme.cores.primarias.a};
    background: ${props => props.theme.cores.secundarias.a};
`

export const Card = ({ children }) => {
    return (<DivEstilizada>
        {children}
    </DivEstilizada>)
}