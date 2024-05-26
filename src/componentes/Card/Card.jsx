import styled from "@emotion/styled"

const DivEstilizada = styled.div`
    padding: 32px;
    border-radius: 16px;
    border: 1px solid #5754ed;
    background: #e8eaf9;
`

export const Card = ({ children }) => {
    return (<DivEstilizada>
        {children}
    </DivEstilizada>)
}