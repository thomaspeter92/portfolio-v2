import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"
import styled from "styled-components"
import Header from "../components/header"
import { graphql } from "gatsby"



// export const query = graphql`
// query SiteTitleQuery {
//   site {
//     siteMetadata {
//       title
//     }
//   }
// }`

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <Header />

  </Layout>
)

export default IndexPage
