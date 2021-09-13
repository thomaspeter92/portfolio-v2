import * as React from "react"
import styled from "styled-components";


export const FlexContainer = styled("div")`
    display: flex;
    flex-direction: ${props => props.dir ? props.dir : 'row'};
    justify-content: ${props => props.justify ? props.justify : 'flex-start'};
    align-items: ${props => props.align ? props.align : 'flex-start'};
`
