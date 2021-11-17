import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Container from "../components/container"
import { FlexContainer } from "../components/utilities/utilities"
import { StaticImage } from "gatsby-plugin-image"



import Layout from "../components/layout"
import SEO from "../components/seo"

const Title = styled.h3`
  color: var(--color-primary);
  border-bottom: 5px solid var(--color-orange);
  width: fit-content;
  text-transform: uppercase;
  margin: 2rem auto;
`

const PortfolioPage = () => ( 

        <Layout>
            <SEO title="projects"/>

            <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center'}}>
                <Container>
                    <Title>
                    Projects
                    </Title>
                </Container>
            </div>
        </Layout>

)

export default PortfolioPage
