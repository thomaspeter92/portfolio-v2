import * as React from "react";
import Helmet from "react-helmet";
import { createGlobalStyle, css } from "styled-components";

import {breakpoints} from "./Breakpoints";


const BodyStyle = css`
    font-family: "Montserrat", sans-serif;
`
const H1Style = css`
    font-size: 55px;
    ${'' /* line-height: 150%; */}
    letter-spacing: 0.20px;
    margin-bottom: 15px;
`
const H2Style = css`
    font-size: 40px;
    font-weight: 500;
    ${'' /* line-height: 150%; */}
    letter-spacing: 0.20px;
    margin-bottom: 15px;

`
const H3Style = css`
    font-size: 32px;
    ${'' /* line-height: 150%; */}
    letter-spacing: 0.20px;
    margin-bottom: 15px;

`
const H4Style = css`
    font-size: 24px;
    ${'' /* line-height: 150%; */}
    letter-spacing: 0.20px;
    margin-bottom: 15px;

`
const H5Style = css`
    font-size: 16px;
    ${'' /* line-height: 150%; */}
    letter-spacing: 0.20px;
    margin-bottom: 15px;

`
const ParagraphStyle = css`
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.20px;
    margin-bottom: 15px;

`

const StyledTypography = createGlobalStyle`
    body {
        ${BodyStyle}
    }
    h1 {
        ${H1Style}
    }
    h2 {
        ${H2Style}
    }
    h3 {
        ${H3Style}
    }
    h4 {
        ${H4Style}
    }
    h5 {
        ${H5Style}
    }
    p {
        ${ParagraphStyle}
    }
`

const Typography = () => (
    <>
        <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
        </Helmet>
        <StyledTypography />
    </>
)






export default Typography;