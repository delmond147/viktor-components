import './App.css'
import Navbar from './components/Navbar'
import HeroContent from './components/HeroContent'
import FooterElements from './components/FooterElements'

function App() {
  return (
    <main className="hero-section">
      <Navbar />
      <HeroContent />
      <FooterElements />
    </main>
  )
}

export default App
