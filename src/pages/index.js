import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'


class IndexPage extends Component {

  render(){

    return (

      <main>

          <Header />
          <AboutUs />
          <Footer />

      </main>
  
    )
  }
}

export default IndexPage
