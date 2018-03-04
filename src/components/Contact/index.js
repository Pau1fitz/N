import React from 'react'
import styled from 'styled-components'

const Contact = () => (

  <ContactContainer id='contact'>
    <Title>Contact</Title>
    <form method='post' action='mail.php'>
      <TopColumn>
        <Label>Your name</Label>
        <Input type='text' name='name'/>
      </TopColumn>
      <TopColumn>
        <Label>Your email address</Label>
        <Input type='text' name='email'/>
      </TopColumn>
      <Label>How can we help?</Label>
      <TextArea type='text' name='details'/>
      <SubmitButton type='submit' />
    </form>
  </ContactContainer>

)

const ContactContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;
  padding: 0 25px 200px 25px;
`

const Title = styled.p`
  font-size: 1em;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-top: 1px solid #fff;
  max-width: 200px;
  padding: 10px 0 40px 0;
`

const Label = styled.p`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 30px;
  font-weight: 300;
  padding-bottom: 10px;
`

const Input = styled.input`
  background: transparent;
  border: 1px solid #fff;
  width: 90%;
  padding: 1em;
  color: #fff;
  font-size: 1.5em;
`

const TextArea = styled.textarea`
  background: transparent;
  border: 1px solid #fff;
  width: 95%;
  padding: 1em;
  color: #fff;
  height: 15em;
  font-size: 1.5em;
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
  font-size: 30px;
  margin-right: 4%;
  float: right;
  cursor: pointer;
  margin-top: 10px;
`

export default Contact
