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

const Title = styled.h3`
  color: ${props => props.theme.cream};
  border-bottom: 5px solid ${porps => porps.theme.orange};
  width: fit-content;
  text-transform: uppercase;
  margin: 2rem auto;
`
const ProjectContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media(max-width: 650px) {
        flex-direction: column
    }
`
const ProjectItem = styled.div`
    flex-basis: 33.33%;
    max-height: 200px;
    overflow:hidden;
    position:relative;

    .project-info {
        position: absolute;
        top: 0;
        left:0;
        height: 100%;
        width: 100%;

        background-color: ${props => props.theme.navy};
        opacity: 0;
        transition: .4s;

        text-align: center;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h4{
            color: ${props => props.theme.orange};
        }
        p {
            color: ${props => props.theme.cream};
        } 
    }
    
    &:hover {
        .project-info {
            opacity: 1
        }
    }
`
const LearnMoreBtn =  styled.button`
    background-color: ${props => props.theme.orange};;
    color: ${props => props.theme.navy};
    font-family: inherit;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 5px;
    padding: 10px 25px;
    border: none;
    outline: none;
    cursor: pointer;
` 
const ProjectPreview = styled.div`
    ${'' /* min-width: 60vw; */}
    max-height:100vh;
    display: flex;
    flex-direction: column;

    .detailed-info {
        background-color: ${props => props.theme.navy};
        padding: 1.5rem;
    }
    .info-inner {
        
        &:first-of-type{
            border-bottom: 1px solid var(--color-primary);
            display: flex;
            align-items: center;
            justify-content: space-between;


        }
        &:last-of-type{
            margin-top:1rem;

            p {
                color: ${props => props.theme.cream};

            }
            div, div * {
                width: fit-content;
                text-align: center;
            }
        }
    }
    .project-title {
        h4 {
            color: ${props => props.theme.orange};
        }
        p{
            color: ${props => props.theme.cream};
        }
    }
`

const PortfolioPage = () => {

    const [modal, showModal] = useState(false);
    const toggleModal = () => showModal(!modal);

    let projects = [
        <>
            <StaticImage className="project-img" src="../images/Rectangle29.png" imgStyle={{objectFit:'cover', height:'100%'}}>
            </StaticImage>
            <div className="project-info">
            <h4>Pet Venture</h4>
            <p>Social Media Site</p>
                <LearnMoreBtn onClick={()=> toggleModal()}>See More</LearnMoreBtn>
            </div>
        </>,
        <>
        <StaticImage src="../images/Rectangle30.png" imgStyle={{objectFit:'contain'}}>
                
            </StaticImage>
            <div className="project-info">
            <h4>Weather App</h4>
            <p>Simple React App</p>
                <LearnMoreBtn>See More</LearnMoreBtn>
            </div>
        </>,
         <>
         <StaticImage src="../images/Rectangle31.png" imgStyle={{objectFit:'contain'}}>
                 
                 </StaticImage>
                 <div className="project-info">
             <h4>Lava Game</h4>
             <p>JavaScript Browser Game</p>
                 <LearnMoreBtn onClick={()=> console.log('hello')}>See More</LearnMoreBtn>
             </div>
         </>,
         <>
         <StaticImage src="../images/Rectangle29.png" imgStyle={{objectFit:'contain'}}>
                 
             </StaticImage>
             <div className="project-info">
             <h4>Library Management System</h4>
             <p>Python Programme</p>
                 <LearnMoreBtn onClick={()=> console.log('hello')}>See More</LearnMoreBtn>
             </div>
         </>,
          <>
          <StaticImage src="../images/Rectangle29.png" imgStyle={{objectFit:'contain'}}>
                  
              </StaticImage>
              <div className="project-info">
              <h4>Library Management System</h4>
              <p>Python Programme</p>
                  <LearnMoreBtn onClick={()=> console.log('hello')}>See More</LearnMoreBtn>
              </div>
          </>,
           <>
           <StaticImage src="../images/Rectangle29.png" imgStyle={{objectFit:'contain'}}>
                   
               </StaticImage>
               <div className="project-info">
               <h4>Library Management System</h4>
               <p>Python Programme</p>
                   <LearnMoreBtn onClick={()=> console.log('hello')}>See More</LearnMoreBtn>
               </div>
           </>,
         
    ]
    
    console.log(projects)
    return(
    <>
        <Layout>
            <SEO title="Projects"/>
            <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center'}}>
                <Container>
                    <Title>
                    Projects
                    </Title>
                    <ProjectContainer>
                        {projects.map(( proj, i) => (
                            <ProjectItem
                            initial={{ opacity: 0, scale: 0}}
                            animate={{ opacity: 1, scale: 1}}
                            as={motion.div}
                            transition={{
                                duration: .5,
                                delay: i * 0.2,
                                ease: 'easeOut'
                                
                            }}
                            >
                                {proj}
                            </ProjectItem>
                        ))}
                    </ProjectContainer>
                </Container>
            </div>

            <Modal show={modal} close={toggleModal}>
                <ProjectPreview>
                    <StaticImage src="../images/Rectangle29.png"/>
                    <div className="detailed-info">
                        <div className="info-inner">
                            <div className="project-title">
                                <h4>Pet Venture</h4>
                                <p>Social media platform for pet owners</p>
                            </div>
                            <Button>Visit Site</Button>
                        </div>
                        <div className="info-inner">
                            <p>
                            Bacon ipsum dolor amet pork short loin tri-tip bresaola beef. Chicken salami corned beef, bresaola pastrami jerky shank kevin short ribs.
                            </p>

                            <p><strong>STACK:</strong> HTML, CSS, JS, PHP, SQL</p>
                        </div>
                    </div>
                </ProjectPreview>
            </Modal>
        </Layout>
                
         
        
</>
)}

export default PortfolioPage
