import React from "react"
import styled from "styled-components"


const H1Style = styled.h1`
    font-size: 48px;
    line-height: 150%;
    letter-spacing: 0.20px;
    color:${props => (props.color ? 'var(--color-pink)' : 'black')}
`
const H2Style = styled.h2`
    font-size: 40px;
    line-height: 150%;
    letter-spacing: 0.20px;
`
const H3Style = styled.h3`
    font-size: 32px;
    line-height: 150%;
    letter-spacing: 0.20px;
`
const H4Style = styled.h4`
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0.20px;
`
const H5Style = styled.h5`
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.20px;
`
const ParagraphStyle = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0.20px;
`

