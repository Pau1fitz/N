import React from 'react'
import TitleText from '../../components/TitleText'
import HeaderLogo from '../../components/HeaderLogo'
import BottomSection from '../../components/BottomSection'

const FourthScreen = () => (

  <main className="fourth-screen section">

    <HeaderLogo color={ '#fff' } />
  
    <TitleText 
      text={ 'To the moon and back.' } 
      color={ '#fff' } 
      size={ '8em' }
    />
  
    <BottomSection />

  </main>

)

export default FourthScreen
