import React, { useState } from "react"
import PropTypes from "prop-types"
import styled  from "styled-components";
import Container from "./container"
import { Button } from "./button";
// import { FlexContainer } from "./utilities/utilities";
import { StaticImage } from "gatsby-plugin-image";
import HeaderAnimation from "./header-animation";


const StyledHeader = styled.header `
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  background-color: var(--color-cream);

  @media(max-width: 770px) {
    padding: 2.5rem 0;
  }

    h1 {
      color: var(--color-primary)
    }
    h2{
      color: var(--color-secondary)
    }
`

const FlexContainer = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media(max-width: 770px) {
    flex-direction: column;
  }

  div{
    
  }
  div:first-of-type {
    width: 60%;
    @media(max-width: 770px) {
    width: 100%;
  }
  }
  div:last-of-type {
    height:70vh; 
    width: 40%;
    position: relative;
    @media(max-width: 770px) {
    width: 100%;
  }
  }
`



const Header = ({ siteTitle }) => {


  return (
  <StyledHeader>
    <Container>
      <FlexContainer align='center'>
        <div>
          <h1>Title Goes Here</h1>
          <h2>Subtitle goes here. Subtitle goes here</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi impedit saepe suscipit eaque architecto quo, est harum dolorem nulla, officia soluta fuga iste mollitia, explicabo qui sit debitis reiciendis.</p>
          <Button to='/'>
            Button
          </Button>
        </div>
        <div>
          <HeaderAnimation/>
          {/* <StaticImage  
          transformOptions={{fit: 'contain', cropFocus: 'attention'}}
          alt="portrait of me" src="../images/portrait.png"/> */}
        </div>
      </FlexContainer>    
    </Container>
  </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
