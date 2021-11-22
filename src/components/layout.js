import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { motion } from "framer-motion"

import Header from "./header"
import ThemeProvider from "../theme";
import NavBtn from "./nav-btn";
import Nav from "./nav";





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


  return (
    <ThemeProvider>
      <NavBtn open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}/>
      <Nav menuOpen={menuOpen}/>
          
    
        <motion.main
          initial={{y: '100%', opacity: 0,scale: 1}}
          animate={{ y: 0, opacity: 1, scale: 1}}
          exit={{y: '-100%', opacity: 0, scale: 1}}
          transition={{
            type: "spring",
            // mass: 0.35,
            // stiffness: 75,
            duration: 0.4
          }}>
          {children}
        </motion.main>

        <footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          Thomas Peter Buckley
        </footer>
    </ThemeProvider>  
)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
