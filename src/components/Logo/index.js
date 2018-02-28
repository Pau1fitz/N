import React from 'react'
import styled from 'styled-components'

const Logo = ({ padding }) => (

    <LogoText padding={ padding }>
        NWA
    </LogoText>

)

const LogoText = styled.h1`
  font-weight: 800;
  font-size: 49px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: ${ props => props.padding } 0;
`

export default Logo