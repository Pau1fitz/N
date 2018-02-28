import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import Quote from '../components/Quote'
import Services from '../components/Services'



class IndexPage extends Component {

  render(){

    return (

      <main className='app'>

          <Header />
          <Quote />
          <AboutUs />
          <Services />
          <Footer />

      </main>
  
    )
  }
}

export default IndexPage
