import React from 'react'
import styled from 'styled-components'

const Services = () => (

    <ServicesSection id="services">

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
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;
  padding: 2em 25px 5em 25px;
`

const Title = styled.p`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;  
  font-size: 1em;
  border-top: 1px solid #fff;
  max-width: 200px;
  padding: 10px 0 40px 0;
`

const ServiceItemsContainer = styled.div`
  display: flex;
`

const ServiceItemsColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const ServiceItemsHeader = styled.p`
  font-size: 30px;
  padding-bottom: 1em;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`

const ServiceItems = styled.p`
  font-size: 23px;
  line-height: 44px;
`

export default Services
