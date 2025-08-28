import React from 'react'
import Signup from './Components/Signup'
import Searchbar from './Components/Searchbar'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Categories from './Components/Categories'
import Products from './Components/Products'
import Banners from './Components/Banners'
import HotDeals from './Components/HotDeals'
import DiscountBanner from './Components/DiscountBanner'
import FeaturedProduct from './Components/FeaturedProduct'
import LatestNews from './Components/LatestNews'

const App = () => {
  return (
    <>
      <Signup />
      <Searchbar/>
      <Navbar/>
      <HeroSection/>
      <Categories/>
      <Products/>
      <Banners/>
      {/* <HotDeals/> */}
      <DiscountBanner/>
      <FeaturedProduct/>
      <LatestNews/>
    </>
  )
}

export default App
