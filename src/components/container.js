import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div `
    width: 90%;
    margin: auto;

    @media(max-width: 770px) {
        ${'' /* width: 95%; */}
    }
`

const Container = ({children}) => (
    <StyledContainer>
        {children}
    </StyledContainer>
)

export default Container