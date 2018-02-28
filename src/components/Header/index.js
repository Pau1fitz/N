import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'

const Header = () => (

  <HeaderContainer>

    <Logo padding={ '40px' }/>

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
  padding: 2em 0;
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
  margin: 0 1.5em;
`

export default Header
