import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <NavBtn open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}/>
      <Nav menuOpen={menuOpen}/>
          
    
        <main>
          {children}
        </main>

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
