import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div `
    width: 90%;
    margin: auto;
`

const Container = ({children}) => (
    <StyledContainer>
        {children}
    </StyledContainer>
)

export default Container