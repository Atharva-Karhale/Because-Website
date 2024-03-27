import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import SecondSection from './Components/SecondSections'
import ThirdSection from './Components/ThirdSection'
import ForthSection from './Components/ForthSection'
import FifthSection from './Components/FifthSection'
import SixthSection from './Components/SixthSection'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <SecondSection/>
      <ThirdSection/>
      <ForthSection/>
      <FifthSection/>
      <SixthSection/>
    </div>
  )
}

export default App
