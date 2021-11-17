import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from "framer-motion"
import { PrimaryLink } from './link'
import { Link } from 'gatsby'



const StyledNav = styled(motion.nav)`
    width: 100vw;
    min-height:100vh;
    height: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    background-color: var(--color-orange);
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const NavList = styled.ul`
    list-style: none;
    text-align: center;
    display: flex; 
    flex-direction: column;
    align-items: center;
`
const Li = styled.li`
    color: var(--color-cream);
    text-transform: uppercase;
    cursor: pointer;
    font-size: 3rem;
    font-weight: 700;
    transition: all .3s ease;
    user-select: none;
    -webkit-user-select: none; /* Safari */
    -webkit-touch-callout: none; /* iOS Safari */
    position: relative;
    margin-bottom: 1rem;

    a {
        position: relative;
        z-index: 20;
        text-decoration: none;
        color: inherit
    }

    &::before{
        content: "";
        position: absolute;
        z-index: 10;
        right: 0;
        left: -5px;
        height: 100%;
        width: 3px;
        background-color: var(--color-cream);
        transform: scaleY(0);
        transition: ease-in transform .15s, 
                    width .15s cubic-bezier(1,0,0,1) .15s,
                    background-color .1s
    }


    &:hover {
        transform: scale(1.2);
        color: var(--color-orange);

        &::before {
            transform: scaleY(1);
            width: 105%;
        }
    }

    

`

// IDEA:
    // when menu opens, the menu items can fly in staggering from off the screen. And when it unmounts, they can fly off again and then the menu will unmount. Must orchastrate this with framer variants. 

const Nav = ({menuOpen}) => {
    return (
        <AnimatePresence>
        {menuOpen && (
            <StyledNav
                key={'nav'}
                initial={{opacity: 0}}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
            <NavList>
                <Li><Link to="/">Home</Link></Li>
                <Li><Link to="/page-2">About</Link></Li>
                <Li><Link to="/portfolio/">Portfolio</Link></Li>
                <Li><Link>Contact</Link></Li>
            </NavList>
                
            </StyledNav>
        )}
        </AnimatePresence>
    )
}

export default Nav
