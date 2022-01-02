import * as React from "react"
import styled from "styled-components";

import { PrimaryLink } from "./link";

const StyledButton = styled(PrimaryLink)`
    background-color: ${props => props.theme.orange};
    border-radius: 5px;
    padding: 1rem 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
    color: ${props => props.theme.navy}}
    display: inline-block;
    margin: 10px 0;
    transition: .3s ease;
    box-sizing: border-box;
    border: 2px solid ${props=> props.theme.navy};
    
    &:hover {
        color: ${props => props.theme.orange};
        background-color: ${props => props.theme.navy};
        border-color: ${props=> props.theme.orange}
    }

`

export const Button = ({children, to, onClick}) => (
    <StyledButton onClick={() => onClick()} to={to}>
        {children}
    </StyledButton>
)