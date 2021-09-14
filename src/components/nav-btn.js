import React from 'react'
import styled from "styled-components";


const StyledNavBtn = styled.div`
    position: absolute;
    z-index: 10000;
    height: 50px;
    width: 50px;
    top: 5%;
    right: 5%;
    cursor: pointer;
    transition: all .3s ease;
    transform-origin: center;

    &:hover {
        transform: scale(1.1)
    }

    span, span::before, span::after {
        width: 40px;
        height: 5px;
        border-radius: 10px;
        background-color: ${props => props.open ? 'var(--color-cream)' : 'var(--color-primary)'};
        display: inline-block;
        transition: all .2s;

        
    }
    span {
        background-color: ${props => props.open ? 'transparent' : 'var(--color-primary)'};
    }
    span::before, span::after {
        content: "";
        position: absolute;
        left: 0;
    }
    span::before {
        top: ${props => props.open ? '0' : '-10px'};
        transform ${props => props.open ? 'rotate(135deg)' : null}
    }
    span::after {
        top: ${props => props.open ? '0' : '10px'};
        transform ${props => props.open ? 'rotate(-135deg)' : null}
    }
    

`

const NavBtn = ({open, onClick}) => {
    return (
        <StyledNavBtn open={open === true ? true : false} onClick={onClick}>
            <span>&nbsp;</span> 
        </StyledNavBtn>
    )
}

export default NavBtn
