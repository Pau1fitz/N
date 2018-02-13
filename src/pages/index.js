import React, { Component } from 'react'
import Link from 'gatsby-link'

import { SectionsContainer, Section } from 'react-fullpage';

class IndexPage extends Component {

  wheel = (e) => {

    e.deltaY < 0 ? this.scrollUp : this.scrollDown;

  }

  render(){

    return (

      <div id="fullpage" onWheel = {this.wheel}>

        <main className="landing-screen section">
            <div className="landing-title">
                <h2 className="landing-text">Hello.</h2>
            </div>
        </main>
    
    
        <main className="second-screen section">
            <section className="landing-title">
                <h2 className="landing-text">Born out of a problem.</h2>
            </section>
    
            <section className="info-container">
              <div className="about">
                <p>About NWA</p>
              </div>
    
              <div className="details">
                <h2 className="details-header">NWA is a business consultancy that helps people and brands do better business</h2>
                <p className="details-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero tortor, dapibus eu malesuada quis, iaculis tincidunt nunc. 
                  Suspendisse congue erat a consectetur pretium. Phasellus sed congue nisl. 
                  Ut consectetur dignissim viverra. Mauris imperdiet ultrices ipsum non egestas.</p>
              </div>
            </section>
        </main>
    
    
        <main className="third-screen section">
            <section className="landing-title">
                <h2 className="landing-text">We have a problem*</h2>
                <p className="landing-subtext">*opportunity</p>
            </section>
    
            <section className="info-container">
              <div className="about">
                <p>About NWA</p>
              </div>
    
              <div className="details">
                <h2 className="details-header">NWA is a business consultancy that helps people and brands do better business</h2>
                <p className="details-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero tortor, dapibus eu malesuada quis, iaculis tincidunt nunc. 
                  Suspendisse congue erat a consectetur pretium. Phasellus sed congue nisl. 
                  Ut consectetur dignissim viverra. Mauris imperdiet ultrices ipsum non egestas.</p>
              </div>
            </section>
        </main>
    
        <main className="fourth-screen section">
            <section className="landing-title">
                <h2 className="landing-text">To the moon and back.</h2>
            </section>
    
            <section className="info-container">
              <div className="about">
                <p>About NWA</p>
              </div>
    
              <div className="details">
                <h2 className="details-header">NWA is a business consultancy that helps people and brands do better business</h2>
                <p className="details-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero tortor, dapibus eu malesuada quis, iaculis tincidunt nunc. 
                  Suspendisse congue erat a consectetur pretium. Phasellus sed congue nisl. 
                  Ut consectetur dignissim viverra. Mauris imperdiet ultrices ipsum non egestas.</p>
              </div>
            </section>
        </main>
    
      </div>
  
    )
  }
 }


export default IndexPage;
