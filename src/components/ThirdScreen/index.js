import React from 'react'
import TitleText from '../../components/TitleText'
import BottomSection from '../../components/BottomSection'

const ThirdScreen = () => (         
  <main className="third-screen section">

    <TitleText 
      text={ 'We have a problem*' } 
      subtext={ '*opportunity' }
      color={ '#fff' } 
      size={ '8em' }
    />

    <BottomSection />
  
  </main>
)

export default ThirdScreen
