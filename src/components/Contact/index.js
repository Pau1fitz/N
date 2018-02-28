import React from 'react'
import styled from 'styled-components'

const Contact = () => (

  <ContactContainer id='contact'>
    <Title>Contact</Title>
    <form action=''>
      <TopColumn>
        <Label>Your Name</Label>
        <Input type='text' name='name'/>
      </TopColumn>
      <TopColumn>
        <Label>Your Email</Label>
        <Input type='text' name='email'/>
      </TopColumn>
      <Label>How can we help?</Label>
      <TextArea type='text' name='name'/>
      <SubmitButton type='submit' />
    </form>
  </ContactContainer>

)

const ContactContainer = styled.section`
  max-width: 900px;
  margin: 0 auto;
  color: #fff;
  padding-bottom: 5em;
`

const Title = styled.p`
  font-size: 1em;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-top: 1px solid #fff;
  max-width: 200px;
  padding: 10px 0 2em 0;
`

const Label = styled.p`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1em;
  font-weight: 300;
  padding-bottom: 1em;
`

const Input = styled.input`
  background: transparent;
  border: 1px solid #fff;
  width: 90%;
  padding: 1em;
  color: #fff;
`

const TextArea = styled.textarea`
  background: transparent;
  border: 1px solid #fff;
  width: 95%;
  padding: 1em;
  color: #fff;
  height: 15em;
`

const TopColumn = styled.div`
  width: 50%;
  display: inline-block;
  padding-bottom: 2em;
`
const SubmitButton = styled.input`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1em;
  margin-right: 4%;
  float: right;
  cursor: pointer;
`

export default Contact
