import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'

const Footer = () => (

  <FooterContainer>

      <Logo />

    
      <FooterItem>Run / Grow / Scale</FooterItem>

      <Copyright>Copyright 2018 NWA UK Ltd.</Copyright>
   

  </FooterContainer>

)

const FooterContainer = styled.footer`
  background-color: #fff;
  display: flex;
  align-items: center;
`

const FooterItem = styled.p`
  font-size: 20px;
`

const Copyright = styled.p`
  font-size: 14px;
  margin-left: auto;
`

export default Footer
