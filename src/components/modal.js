import { AnimatePresence, motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'
import React, {useState} from 'react'
import styled from "styled-components"

const ModalContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(2px);

`
const ModalInner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

`

export const Modal = ({children, show, close}) => {

    
    return (
        <AnimatePresence >
        {show && (
            <ModalContainer
                key={'outer'} 
                onClick={() => {close()}}
                as={motion.div}
                initial={{opacity: 0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration: 0.1}}
                >
                <ModalInner
                    key={'inner'} 
                    as={motion.div}
                    initial={{x: '-50%', y: '-50%', scale: 0}}
                    animate={{scale: 1}}
                    exit={{opacity: 0}}
                    onClick={e => e.stopPropagation()}
                    >
                    {children}
                </ModalInner>
            </ModalContainer>
        ) }
        </AnimatePresence>

    )
}
