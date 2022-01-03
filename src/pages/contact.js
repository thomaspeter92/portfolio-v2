import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import Container from "../components/container"
import { motion } from "framer-motion"
import Layout from "../components/layout"
import SEO from "../components/seo"


const Title = styled.h3`
  color: ${props => props.theme.cream};
  border-bottom: 5px solid ${porps => porps.theme.orange};
  width: fit-content;
  text-transform: uppercase;
  margin: 2rem auto;
`
const InnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const Blob = styled.div`
    width: 75px;
    height: 75px;
    background: ${props => props.theme.orange};
    border-radius: 50%;
    margin-bottom: 25px
`
const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    position: relative;

    p{
        color: ${props => props.theme.cream}
    }

    input, textarea {
        width: 100%;
        border: 1px solid ${props => props.theme.teal};
        background-color: transparent;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 1rem 1.5rem;
        resize: none;
        color: ${props => props.theme.cream};

        &::placeholder{
            color: ${props => props.theme.orange};
        }
        &:focus {
            outline: none;
            border-color: ${props => props.theme.orange}
        }
    }
    input[type="submit"] {
        background: ${props => props.theme.orange};
        color: ${props => props.theme.navy};
        font-weight: bold;
        text-transform: uppercase;
        border: none
    }
`
const ErrorMsg = styled.span`
    position: absolute;
    text-align: center;
    color: red;
    left: 0;
    bottom: -20px;
    width: 100%;
`
const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '', 
        email: '',
        subject:'',
        message: '',
        _subject: 'Portfolio Site Contact'
    })
    const [invalidInputs, setInvalidInputs] = useState(false)

    const handleChange = name => event => {
        setFormData({...formData, [name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if(formData.name.length < 3 || formData.subject.length < 3 || formData.message.length < 5 || !email_regex.test(String(formData.email).toLowerCase())) {
            setInvalidInputs(true)
            return
        }
        fetch("https://formsubmit.co/buckleythomas92@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((res) => {
            if(res.status !== 200) {
                throw new Error("There was an error when sending your message. Please Try again.")
            } else {
                setFormData({
                    name: '', 
                    email: '',
                    subject:'',
                    message: '',
                    _subject: 'Portfolio Site Contact'
                })
                setInvalidInputs(false)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const blobs = [
        {},
        {},
        {},
    ]
    
    return(
        <>
            <Layout>
                <SEO title="Contact"/>
                <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center'}}>
                    <Container>
                        <Title>
                            Contact
                        </Title>
                        <InnerContainer>
                            <div>

                                <Blob
                                    initial={{ opacity: 0, scale: 0}}
                                    animate={{ opacity: 1, scale: 1}}
                                    as={motion.div}
                                    transition={{
                                        duration: .5,
                                        delay: 1 * 0.2,
                                        ease: 'easeOut'
                                    }}
                                />
                                <Blob
                                   initial={{ opacity: 0, scale: 0}}
                                    animate={{ opacity: 1, scale: 1}}
                                    as={motion.div}
                                    transition={{
                                        duration: .5,
                                        delay: 2 * 0.2,
                                        ease: 'easeOut'
                                    }}
                                />
                                <Blob
                                    initial={{ opacity: 0, scale: 0}}
                                    animate={{ opacity: 1, scale: 1}}
                                    as={motion.div}
                                    transition={{
                                        duration: .5,
                                        delay: 3 * 0.2,
                                        ease: 'easeOut'
                                    }}
                                />
                            </div>
                            <ContactForm >
                                <p>Get in touch & I'll get back to you ASAP!</p>
                                <div style={{width: '100%', display: 'flex'}}>
                                    <input
                                        value={formData.name} 
                                        onChange={handleChange('name')}  
                                        placeholder="Name" 
                                        type="text" 
                                        name="name" 
                                        autoComplete="off" 
                                        required 
                                        style={{marginRight: '10px'}}>
                                    </input>

                                    <input
                                        value={formData.email}
                                        onChange={handleChange('email')}
                                        invalid={false}  
                                        placeholder="Email" 
                                        type="email"
                                        name="email"
                                        autoComplete="off" 
                                        required>
                                    </input>
                                </div>
                                <input 
                                    value={formData.subject} 
                                    onChange={handleChange('subject')} 
                                    placeholder="Subject" 
                                    type="text" 
                                    name="subject" 
                                    autoComplete="off" 
                                    required>    
                                </input>
                                <textarea
                                    value={formData.message} 
                                    onChange={handleChange('message')} 
                                    placeholder="Message" 
                                    name="message" 
                                    rows="5" 
                                    autoComplete="off" 
                                    required
                                ></textarea>
                                <input onClick={handleSubmit} type="submit" value="Send"></input>
                                { invalidInputs == true && (
                                    <ErrorMsg>Some inputs are too short or invalid, try again.</ErrorMsg>
                                )}     

                            </ContactForm>
                        </InnerContainer>
                    </Container>
                </div>
            </Layout>
        </>
    )
}

export default ContactPage