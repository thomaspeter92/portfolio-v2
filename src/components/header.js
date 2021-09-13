import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components";
import Container from "./container"
import { PrimaryLink } from "./link";
import { Button } from "./button";
import { FlexContainer } from "./utilities/utilities";
import { StaticImage } from "gatsby-plugin-image";


const StyledHeader = styled.header `
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  background-color: var(--color-cream);

    h1 {
      color: var(--color-primary)
    }
    h2{
      color: var(--color-secondary)
    }
`


const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <FlexContainer align='center'>
        <div >
          <h1>Hello. I'm Tom.</h1>
          <h2>Full-stack Developer & Designer</h2>
          <p>Thanks for visiting my portfolio site! My name is Thomas and I am a junior full-stack developer with a particular interest in front end development and design.</p>
          <Button>
            my work
          </Button>
        </div>
        <div >
          <StaticImage  
          transformOptions={{fit: 'contain', cropFocus: 'attention'}}
          alt="portrait of me" src="../images/portrait.png"/>
        </div>
      </FlexContainer>    
    </Container>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
