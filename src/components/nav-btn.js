import React from 'react'
import styled from "styled-components";


const StyledNavBtn = styled.div`
    position: absolute;
    top: 5%;
    right: 5%;
    cursor: pointer;

    span, span::before, span::after {
        width: 40px;
        height: 5px;
        border-radius: 10px;
        background-color: var(--color-orange);
        display: inline-block;
        transition: all .2s;
    }
    span::before, span::after {
        content: "";
        position: absolute;
        left: 0;
    }
    span::before {
        top: -10px;
    }
    span::after {
        top: 10px;
    }

`

const NavBtn = () => {
    return (
        <StyledNavBtn>
            <span>&nbsp;</span> 
        </StyledNavBtn>
    )
}

export default NavBtn
