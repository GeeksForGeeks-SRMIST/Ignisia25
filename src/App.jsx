import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Aboutus from './components/Aboutus'
import Timeline from './components/Timeline'
import FAQs from './components/FAQs'
import SpeakerSection from './components/SpeakerSection'
import SponsorsSection from './components/SponsorsSection' // NEW IMPORT

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Aboutus />
        <SpeakerSection />
        <SponsorsSection /> {/* NEW SECTION ADDED HERE */}
        <Timeline />
        <FAQs />
      </main>
      <Footer />
    </>
  )
}

export default App