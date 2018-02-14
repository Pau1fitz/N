import React from 'react'
import styled from 'styled-components'

const HeaderLogo = ({ color }) => (<Logo color={ color }>N</Logo>)

const Logo = styled.h1`
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: ${ props => props.color };
    font-size: 3em;
    font-weight: 800;
    text-align: center;
`

export default HeaderLogo
