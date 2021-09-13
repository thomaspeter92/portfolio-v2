import * as React from "react"
import styled from "styled-components"


const StyledTitle = styled.h2 `
    text-align: center;
`

const SectionTitle = ({children}) => (

    <StyledTitle>
        {children}
    </StyledTitle>

)

export default SectionTitle
