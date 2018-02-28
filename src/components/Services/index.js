import React from 'react'
import styled from 'styled-components'

const Services = () => (

    <ServicesSection>

      <Title>Our Services</Title>

      <ServiceItemsContainer>

        <ServiceItemsColumn>
          <ServiceItemsHeader>Strategy</ServiceItemsHeader>
          <ServiceItems>Business Consulting</ServiceItems>
          <ServiceItems>Innovation</ServiceItems>
          <ServiceItems>Branding</ServiceItems>
          <ServiceItems>Data Science</ServiceItems>
          <ServiceItems>Research</ServiceItems>
        </ServiceItemsColumn>

        <ServiceItemsColumn>
          <ServiceItemsHeader>Product</ServiceItemsHeader>
          <ServiceItems>Experience Design</ServiceItems>
          <ServiceItems>Physical Design</ServiceItems>
          <ServiceItems>Service Design</ServiceItems>
          <ServiceItems>Technology</ServiceItems>
          <ServiceItems>Search Optimization</ServiceItems>
        </ServiceItemsColumn>
        <ServiceItemsColumn>
          <ServiceItemsHeader>Marketing</ServiceItemsHeader>
          <ServiceItems>Campaigns</ServiceItems>
          <ServiceItems>Content</ServiceItems>
          <ServiceItems>Social & PR</ServiceItems>
          <ServiceItems>Media</ServiceItems>
          <ServiceItems>CRM</ServiceItems>
        </ServiceItemsColumn>

      </ServiceItemsContainer>

    </ServicesSection>
)

const ServicesSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 2em 0;
  color: #fff;
`

const Title = styled.p`
  font-size: 1em;
  border-top: 1px solid #fff;
  max-width: 200px;
  padding: 10px 0 2em 0;
`

const ServiceItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ServiceItemsColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const ServiceItemsHeader = styled.p`
  font-size: 1.5em;
  padding-bottom: 1em;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`

const ServiceItems = styled.p`
  font-size: 1.1em;
  line-height: 30px;
`



export default Services
