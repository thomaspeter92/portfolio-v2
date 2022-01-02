import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Container from "../components/container"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../components/button";
import { Modal } from "../components/modal"


import Layout from "../components/layout"
import SEO from "../components/seo"


const ContactPage = () => {

    return(
        <>
            <Layout>
                <SEO title="Contact"/>

                <Container>
                    
                </Container>
            </Layout>
        </>
    )
}

export default ContactPage