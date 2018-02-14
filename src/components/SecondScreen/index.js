import React from 'react'
import TitleText from '../../components/TitleText'
import HeaderLogo from '../../components/HeaderLogo'
import BottomSection from '../../components/BottomSection'

const SecondScreen = () => (         
  <main className="second-screen section">

    <HeaderLogo color={ 'fff' } />

    <TitleText 
      text={ 'Born out of a problem.' } 
      color={ '#fff' } 
      size={ '8em' }
    />
    
    <BottomSection />
    
  </main>
)

export default SecondScreen
