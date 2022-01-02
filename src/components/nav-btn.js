import React from 'react'
import styled from "styled-components";


const StyledNavBtn = styled.div`
    position: relative;
    height: 50px;
    width: 50px;
   
    cursor: pointer;
    transition: all .3s ease;
    transform-origin: center;
    user-select: none;

    div {
        position: relative;
        top: 50%;
    }

    &:hover {
        transform: scale(1.1)
    }
    span, span::before, span::after {
        width: 40px;
        height: 5px;
        border-radius: 10px;
        background-color: ${props => props.open ? props.theme.cream : props.theme.orange};
        display: inline-block;
        transition: all 1s;
    }
    span {
        background-color: ${props => props.open ? 'transparent' : props.theme.orange};
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
            <div>
                <span>&nbsp;</span> 
            </div>
        </StyledNavBtn>
    )
}

export default NavBtn
