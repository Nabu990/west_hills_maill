import { useEffect } from 'react'
import Header from './components/Header'
import Categories from './components/Categories'
import FeaturedStores from './components/FeaturedStores'
import Reviews from './components/Reviews'
import PopularTags from './components/PopularTags'
import Gallery from './components/Gallery'
import ShowcaseSections from './components/ShowcaseSections'
import Footer from './components/Footer'
import { mallData } from './data/mallData'

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
    <div className="min-h-screen">
      <Header mall={mallData} />
      <Categories categories={mallData.categories} />
      <Gallery images={mallData.gallery} />
      <ShowcaseSections sections={mallData.sections} />
      <FeaturedStores stores={mallData.featuredStores} />
      <PopularTags tags={mallData.popularTags} />
      <Reviews reviews={mallData.reviews} />
      <Footer mall={mallData} />
    </div>
  )
}

export default App
