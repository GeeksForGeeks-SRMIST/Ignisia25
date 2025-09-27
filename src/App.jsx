import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Aboutus from './components/Aboutus'
import Timeline from './components/Timeline'
import FAQs from './components/FAQs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <Aboutus />
    <Timeline />
    <FAQs />
    <Footer />
    </>
  )
}

export default App
