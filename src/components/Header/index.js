import React from 'react'
import styled from 'styled-components'

const Header = ({ color }) => (

  <HeaderContainer>

    <HeaderTitle>NWA</HeaderTitle>

    <NavItemContainer>

      <NavItem href="/#about">about us</NavItem>
      <NavItem href="/#services">services</NavItem>
      <NavItem href="/#contact">contact</NavItem>

    </NavItemContainer>

  </HeaderContainer>

)

const HeaderContainer = styled.header`
  background-color: #fff;
  text-align: center;
`

const HeaderTitle = styled.h1`
  font-weight: 800;
  font-size: 49px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 40px 0; 
`

const NavItemContainer = styled.nav`
  display: flex;
  justify-content: center;
`

const NavItem = styled.a`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #000;
  font-size: 19px;
  text-decoration: none;
  margin: 0 10px;
`

export default Header
