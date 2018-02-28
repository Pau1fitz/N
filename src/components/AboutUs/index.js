import React from 'react'
import styled from 'styled-components'

const AboutUs = () => (

  <AboutUsContainer id='about'>

    <AboutUsSection>

      <AboutUsTitleContainer>
        <Title>About us</Title>
      </AboutUsTitleContainer>

      <AboutUsDescriptionContainer>
        <AboutUsDescriptionTitle>
          NWA is a business consultancy that helps people and brands do better business
        </AboutUsDescriptionTitle>

        <AboutUsDescriptionParagraphContainer>
          <AboutUsDescriptionParagraph>NWA helps businesses look for the opportunity where others see problems.</AboutUsDescriptionParagraph>
          <AboutUsDescriptionParagraph>We invest in bringing about positive change and we do that by being obsessive about delivering a positive outcome.</AboutUsDescriptionParagraph>
          <AboutUsDescriptionParagraph>We work with senior leadership who want to embrace those opportunities to bring about lasting change for their business.</AboutUsDescriptionParagraph>
          <AboutUsDescriptionParagraph>We are interested in the outcome and we are obsessive about delivering results.</AboutUsDescriptionParagraph>
        </AboutUsDescriptionParagraphContainer>
      </AboutUsDescriptionContainer>

    
    </AboutUsSection>

  </AboutUsContainer>

)

const AboutUsContainer = styled.section`
  background-color: rgb(45, 45, 45);
  color: #fff;
`

const AboutUsSection = styled.section`
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  padding: 2em 0;
`

const Title = styled.p`
  font-size: 1em;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-top: 1px solid #fff;
  max-width: 200px;
  padding-top: 10px;
`

const AboutUsTitleContainer = styled.div`
  flex: 1;
`

const AboutUsDescriptionContainer = styled.div`
  flex: 2;
`

const AboutUsDescriptionTitle = styled.p`
  font-size: 2.5em;
`

const AboutUsDescriptionParagraphContainer = styled.p`
  padding: 2em 0;
`

const AboutUsDescriptionParagraph = styled.p`
  font-size: 1em;
  padding-bottom: 0.8em;
  line-height: 22px;
`

export default AboutUs
