import React from 'react'
import styled from 'styled-components'
import img from '../../img/earth.jpg'

const Intro = () => (

  <IntroContainer>
    <ImageContainer>

      <IntroSection>

        <IntroTitle>Far Out</IntroTitle>

      </IntroSection>

    </ImageContainer>

    <IntroSection>

      <IntroText>
        It's important to see things from a different perspective.
        We combine the right people with a proven way of working to solve
        your business problems. We have been offering out unique expertise
        and methology for over 30 years.
      </IntroText>

    </IntroSection>
  </IntroContainer>

)

const IntroContainer = styled.section`
  background-color: rgb(39, 40, 39);
  color: #fff;
  padding-bottom: 5em;
`

const ImageContainer = styled.section`
  background-image: url(${img});
  background-size: cover;
  height: 320px;
  background-position: center;
`

const IntroSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 2em 0;
  color: #fff;
`

const IntroTitle = styled.p`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #fff;
  font-size: 8em;
  font-weight: 800;
  margin-top: 0.8em;
`

const IntroText = styled.p`
  color: #fff;
  font-size: 1.4em;
  font-weight: 300;
  max-width: 500px;
  line-height: 26px;
`




export default Intro
