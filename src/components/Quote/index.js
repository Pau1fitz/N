import React from 'react'
import styled from 'styled-components'

const Quote = () => (

  <QuoteSection id='about'>

    <QuoteTitleContainer>
      <Title>""</Title>
    </QuoteTitleContainer>

    <QuoteDescriptionContainer>
      <QuoteDescriptionTitle>
        NWA are truly unique. They have taken us from opportunity to launch with a drive and determination worth it's weight in gold.
      </QuoteDescriptionTitle>

      <QuoteDescriptionParagraphContainer>
        <QuoteDescriptionParagraph>Firstname Surname, Royal Mint</QuoteDescriptionParagraph>
      </QuoteDescriptionParagraphContainer>
    </QuoteDescriptionContainer>

  
  </QuoteSection>
)

const QuoteSection = styled.section`
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  padding: 2em 0 5em 0;
  color: #fff;
`

const Title = styled.p`
  font-size: 2em;
  border-top: 1px solid #fff;
  max-width: 200px;
  padding-top: 10px;
`

const QuoteTitleContainer = styled.div`
  flex: 1;
`

const QuoteDescriptionContainer = styled.div`
  flex: 2;
`

const QuoteDescriptionTitle = styled.p`
  font-size: 2.5em;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 300;
`

const QuoteDescriptionParagraphContainer = styled.div`
  padding: 2em 0;
`

const QuoteDescriptionParagraph = styled.p`
  font-size: 1em;
  padding-bottom: 0.8em;
  line-height: 22px;
`

export default Quote
