import React from 'react'
import Header from '../../Components/Header'
import Banner from '../../Components/Banner'
import FavoriteProducts from './FavoriteProducts'
import Footer from '../../Components/Footer'

const HomePage = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <FavoriteProducts/>
        <Footer/>
    </div>
  )
}

export default HomePage