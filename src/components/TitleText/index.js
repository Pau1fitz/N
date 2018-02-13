import React from 'react'
import styled from 'styled-components'

const TitleText = ({ text, color, size }) => (         
  <LandingTitle>
    <LandingText size={ size } color={ color }>
      { text }
    </LandingText>
  </LandingTitle>
)

const LandingTitle = styled.section`
  max-width: 1000px;
`

const LandingText = styled.h2`
  font-family: 'Catamaran', sans-serif;
  color: ${ props => props.color };
  font-size: ${ props => props.size };
`

export default TitleText
