import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components";



const StyledLink = styled(props => <Link {...props} />)`
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        cursor: pointer;
    }
`
export const PrimaryLink = ({children, to, className}) => (
    <StyledLink className={className} to={to}>
        {children}
    </StyledLink>
)