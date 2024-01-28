import React from 'react';
// css
import '../../App.css'
import '../../assets/css/brands.css'
import '../../assets/css/link.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
// js
import 'bootstrap/js/index.esm'
//component
import Header from '../../Components/Header'
import Link from './Link'
import Brands from './Brands'
import Filter from './Filter'
import ScreenProducts from './ScreenProducts'


const ScreenPage = () => {
  return (
    <div>
      <Header />
      <div className="bg-main">
        <Link />
        <Brands />
        <Filter />
        <ScreenProducts />
      </div>
    </div>
  )
}

export default ScreenPage