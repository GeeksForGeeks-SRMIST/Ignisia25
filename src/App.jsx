import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Aboutus from './components/Aboutus'
import Timeline from './components/Timeline'
import FAQs from './components/FAQs'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Aboutus />
        <Timeline />
        <FAQs />
      </main>
      <Footer />
    </>
  )
}

export default App