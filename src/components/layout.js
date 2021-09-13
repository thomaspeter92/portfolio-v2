import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import ThemeProvider from "../theme";
import NavBtn from "./nav-btn";



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

  return (
    <ThemeProvider>
      <NavBtn/>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
        <main>
          {children}
        </main>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
    </ThemeProvider>  
)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
