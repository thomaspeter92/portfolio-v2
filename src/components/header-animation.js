import React from 'react'
import styled, { keyframes, css } from "styled-components";
import Svg1 from "../svg/html-tag.svg"
import Svg2 from "../svg/html-tag2.svg"
import EllipseP from "../svg/Ellipse-primary.svg"
import EllipseS from "../svg/Ellipse-secondary.svg"
import EllipseO from "../svg/Ellipse-orange.svg"
import PortraitSVG from "../svg/portrait.svg"


const rotate = keyframes `
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg)
}
`
const pulse = keyframes`
0% {
transform: scale(0);
opacity: 1;
transform-origin: center;
}
100% {
transform: scale(4.5);
opacity: 0;
transform-origin: center;
}
`;
const Ellipse1 = styled(EllipseP)`
height: 275px;
width: 275px;
display: block;
position: absolute;
z-index: 15;
left: 50%;
transform: translate(-50%, -50%);
top: 50%;
`
const Ellipse2 = styled(EllipseS)`
height: 300px;
width: 300px;
display: block;
position: absolute;
z-index: 10;
left: 50%;
transform: translate(-50%, -50%);
top: 50%;

`
const Ellipse3 = styled(EllipseO)`
height: 325px;
width: 325px;
display: block;
position: absolute;
z-index: 5;
left: 50%;
transform: translate(-50%, -50%);
top: 50%;
`
const Code1 = styled(Svg1)`
animation: ${rotate} infinite 10s linear;
position: absolute;
bottom: 0%;
right: 0
`
const Code2 = styled(Svg2)`
animation: ${rotate} infinite 12s linear;
position: absolute;
left: 0;
`
const Portrait = styled(PortraitSVG)`
position: absolute;
left: 50%;
transform: translate(-50%, -50%);
top: 50%;
z-index: 20;
height: 350px
`

const HeaderAnimation = () => {
    return (
        <>
            <Ellipse1/>
            <Ellipse2/>
            <Ellipse3/>
            <Code1/>
            <Code2/>
            <Portrait/>
        </>
    )
}

export default HeaderAnimation
