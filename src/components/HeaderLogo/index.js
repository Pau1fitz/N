import React from 'react'
import styled from 'styled-components'

const HeaderLogo = ({ color }) => (<Logo color={ color }>N</Logo>)

const Logo = styled.h1`
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: ${ props => props.color };
    font-size: 2.5em;
    padding-bottom: 0.5em;
    font-weight: 800;
    text-align: center;
`

export default HeaderLogo
