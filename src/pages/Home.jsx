import Header from '../components/Header'
import Categories from '../components/Categories'
import FeaturedStores from '../components/FeaturedStores'
import ShowcaseSections from '../components/ShowcaseSections'
import Gallery from '../components/Gallery'
import Reviews from '../components/Reviews'
import PopularTags from '../components/PopularTags'
import Footer from '../components/Footer'
import { mallData } from '../data/mallData'

export default function Home() {
  return (
    <>
      <Header mall={mallData} />
      <Categories categories={mallData.categories} />
      <FeaturedStores stores={mallData.featuredStores} />
      <ShowcaseSections sections={mallData.sections} />
      <Gallery images={mallData.gallery} />
      <Reviews reviews={mallData.reviews} />
      <PopularTags tags={mallData.popularTags} />
      <Footer mall={mallData} />
    </>
  )
}
