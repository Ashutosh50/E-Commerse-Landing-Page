import React from 'react'
import NavBar from '../Components/NavBar'
import Announcement from '../Components/Announcement';
import Slider from '../Components/Slider';
import Categories from '../Components/Catagories';
import Products from '../Components/Products';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
const Home = () => {
  return (
    <div>
      <Announcement/>
      <NavBar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
      </div>
  )
}

export default Home;   