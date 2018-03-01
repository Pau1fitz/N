import React from 'react'
import styled from 'styled-components'
import img from '../../img/earth.jpg'

const Intro = () => (

  <IntroContainer>
    <ImageContainer>

      <IntroSection>

        <IntroTitle>Far out</IntroTitle>

      </IntroSection>

    </ImageContainer>

    <IntroSection>

      <IntroText>
        It's important to see things from a different perspective.
        We combine the right people with a proven way of working to solve
        your business problems. We have been offering our unique expertise
        and methology for over 30 years.
      </IntroText>

    </IntroSection>
  </IntroContainer>

)

const IntroSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 25px 2em 25p;
  color: #fff;
`

const IntroContainer = styled.section`
  background-color: rgb(39, 40, 39);
  color: #fff;
  padding-bottom: 5em;
`

const ImageContainer = styled.section`
  background-image: url(${img});
  background-size: 110%;
  height: 320px;
  background-position: center;
`

const IntroTitle = styled.p`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #fff;
  font-size: 150px;
  font-weight: 800;
  padding-top: 100px;
  letter-spacing: 8px;
`

const IntroText = styled.p`
  color: #fff;
  font-size: 31px;
  max-width: 750px;
  line-height: 1.42;
`

export default Intro
