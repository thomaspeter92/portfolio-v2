import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"

import ThemeProvider from "../theme";
import NavBtn from "./nav-btn";
import Nav from "./nav";
import sun from "./../svg/sun.svg"
import Container from './container';



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [menuOpen, setMenuOpen] = useState(false)

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 10000;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  margin: auto;

  @media(max-width: 770px) {
      ${'' /* width: 95%; */}
  }
  @media(min-width: 1200px) {
      width: 1000px;
  }
`
const Sun = styled(sun)`
    height: 30px;
    width: 30px;
`
  return (
    <ThemeProvider>
          <NavBar>
            <Sun />
            <NavBtn open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}/>
          </NavBar>
      
      <Nav menuOpen={menuOpen}/>
          
    
        <motion.main
          initial={{y: '100%', opacity: 0,}}
          animate={{ y: 0, opacity: 1, }}
          exit={{y: '-100%', opacity: 0, }}
          transition={{
            type: "spring",
            duration: 0.5
          }}>
          {children}
        </motion.main>

        
    </ThemeProvider>  
)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
