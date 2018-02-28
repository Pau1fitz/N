import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import Intro from '../components/Intro'
import AboutUs from '../components/AboutUs'
import Quote from '../components/Quote'
import Services from '../components/Services'
import Footer from '../components/Footer'


class IndexPage extends Component {

  render(){

    return (

      <main className='app'>

          <Header />
          <Intro />
          <Quote />
          <AboutUs />
          <Services />
          <Footer />

      </main>
  
    )
  }
}

export default IndexPage
