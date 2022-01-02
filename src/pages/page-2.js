import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Container from "../components/container"
import { StaticImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Title = styled.h3`
  color: ${porps => porps.theme.cream};
  border-bottom: 5px solid ${porps => porps.theme.orange};
  width: fit-content;
  text-transform: uppercase;
  margin: 2rem auto;
`
const Subheading = styled.h4`
  color: ${porps => porps.theme.cream};
  width: fit-content;
  text-transform: uppercase;
  margin: .75rem auto;
`
const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    color: ${props => props.theme.cream}
  }
`
const PhotoBox = styled.div `
  border-radius: 50%;
  display: flex;
  jusitfy-content: center;
  align-items: center;
  overflow: hidden;
  border: 5px solid ${porps => porps.theme.orange};
  height: 150px;
  width: 150px;
  margin: auto;
  margin-bottom: 15px
`
const SkillBar = styled.div `
  width: 90%;
  height: 26px;
  background-color: ${porps => porps.theme.teal};
  margin: auto;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;

  p{
    color: ${porps => porps.theme.cream};
    text-align: right;
    margin-right: 1rem;
    position: relative;
    z-index: 10
  }

  span {
    ${'' /* content: ""; */}
    position: absolute;
    height: 100%;
    width: 1%;
    background-color: ${porps => porps.theme.orange};
    z-index: 0;
    transform-origin: left;
  }
`
const skills = [['HTML', 90],['CSS', 80],['JavaScript', 75],['React', 70],['PHP', 55],['Python', 50]]

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center'}}>
    <Container>
        <Title>
          About Me
        </Title>
        <Container2>
          <div style={{width: '47.5%', textAlign:'center'}}>
            <PhotoBox>
              <StaticImage width={200} height={200} imgStyle={{objectFit: 'contain'}} src="../images/my-pic.jpeg"></StaticImage>
            </PhotoBox>
            <p>
              Thanks for visiting my portfolio page. I am a junior full stack developer currently living in Seoul, South Korea. I have over a years experience in web development, and even more in design.
            <br/><br/>
              {/* I started my journey in tech by completing a full-stack web development bootcamp in 2020, after which I have been working as a front end developer. I am also currently enrolled as a Master of Computer Science student at Keele University.  */}
            </p>
          </div>
          <div style={{width: '47.5%'}}>
            {skills.map((skill, i) => (
              <SkillBar>
                <motion.span
                initial={{ width:'0%'}}
                animate={{ width: `${skill[1]}%`}}
                transition={{
                  type: "spring", 
                  bounce: 0.5,
              
                  duration: 1,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}></motion.span>
                <p>{skill[0]}</p>
              </SkillBar>
            ))}
          </div>
        </Container2>
        <Link style={{margin: '25px'}} to="/portfolio">Next page</Link>

      </Container>
    </div>
  </Layout>
)

export default SecondPage
