import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from "framer-motion"



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
`
const Li = styled.li`
    color: var(--color-cream);
    ${'' /* display: inline-block; */}
    text-transform: uppercase;
    cursor: pointer;
    font-size: 3rem;
    font-weight: 700;
    transition: all .3s ease;
    user-select: none;
    -webkit-user-select: none; /* Safari */
    -webkit-touch-callout: none; /* iOS Safari */


    &:hover {
        transform: scale(1.2);
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
                <Li>Home</Li>
                <Li>Portfolio</Li>
                <Li>Contact</Li>
            </NavList>
                
            </StyledNav>
        )}
        </AnimatePresence>
    )
}

export default Nav
