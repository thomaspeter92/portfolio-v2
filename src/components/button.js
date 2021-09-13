import * as React from "react"
import styled from "styled-components";

import { PrimaryLink } from "./link";

const StyledButton = styled(PrimaryLink)`
    border: 4px solid var(--color-primary);
    background-color: var(--color-orange);
    border-radius: 100px;
    padding: 1rem 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
    color: var(--color-primary);
    display: inline-block;
    margin: 10px 0;
    
    &:hover {
        color: white
    }

`

export const Button = ({children, to, margin}) => (
    <StyledButton to={to}>
        {children}
    </StyledButton>
)