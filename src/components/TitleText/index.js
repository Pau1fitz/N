import React from 'react'
import styled from 'styled-components'

const TitleText = ({ text, subtext, color, size }) => (         
  <LandingTitle>
    <LandingText size={ size } color={ color }>
      { text }
    </LandingText>
    { subtext && (
      <SubText color={ color }>
        { subtext }
      </SubText>
    )
    }
  </LandingTitle>
)


const LandingTitle = styled.section`
  max-width: 1000px;
`

const LandingText = styled.h2`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: ${ props => props.color };
  font-size: ${ props => props.size };
`

const SubText = styled.p`
  color: ${ props => props.color };
  font-size: 4em;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 1em 0 0 0;
`

export default TitleText
