import React from 'react'
import TitleText from '../../components/TitleText'
import BottomSection from '../../components/BottomSection'

const SecondScreen = () => (         
  <main className="second-screen section">

    <TitleText 
      text={ 'Born out of a problem.' } 
      color={ '#fff' } 
      size={ '8em' }
    />
    
    <BottomSection />
    
  </main>
)

export default SecondScreen
