import React, { Component } from 'react'
import Link from 'gatsby-link'
import LandingScreen from '../components/LandingScreen'
import SecondScreen from '../components/SecondScreen'
import ThirdScreen from '../components/ThirdScreen'
import FourthScreen from '../components/FourthScreen'
import $ from 'jquery'
import 'fullpage.js/dist/jquery.fullPage.js'
import 'fullpage.js/dist/jquery.fullpage.css'

class IndexPage extends Component {

  componentDidMount() {
    $('#fullpage').fullpage({
      verticalCentered: false
    });
  }

  render(){

    return (

      <div id="fullpage">

        <LandingScreen />
        <SecondScreen />
        <ThirdScreen />
        <FourthScreen />
    
      </div>
  
    )
  }
 }


export default IndexPage;
