import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'

const Footer = () => (

  <FooterContainer>
    <FooterItemContainer>
      <Logo />
      <FooterItem>Run / Grow / Scale</FooterItem>
      <Copyright>Copyright 2018 NWA UK Ltd.</Copyright>
    </FooterItemContainer>
  </FooterContainer>

)

const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 2.5em 0;
`

const FooterItemContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
`

const FooterItem = styled.p`
  font-size: 20px;
  margin-left: 2em;
`

const Copyright = styled.p`
  font-size: 14px;
  margin-left: auto;
`

export default Footer
