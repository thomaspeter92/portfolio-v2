import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"
import SectionTitle from "../components/sectionTitle"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container>
      <SectionTitle>
        <h3>PROJECTS</h3>
        <h4>PROJECTS</h4>
      </SectionTitle>
    </Container>
  </Layout>
)

export default IndexPage
