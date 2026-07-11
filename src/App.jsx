import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Stores from './pages/Stores'
import Map from './pages/Map'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll('.scroll-reveal')
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('visible')
        }
      })
    }

    window.addEventListener('scroll', revealElements)
    revealElements()

    return () => window.removeEventListener('scroll', revealElements)
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/map" element={<Map />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
