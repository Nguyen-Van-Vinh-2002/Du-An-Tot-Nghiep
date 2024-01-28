import React from 'react'
import Header from '../../Components/Header'
import Brands from './Brands'
import Careers from './Careers'
import Link from './Link'
import '../../assets/css/link.css'

const CareersPage = () => {
  return (
    <div>
      <Header />
      <Link />
      <div className="bg-main">
        <Brands />
        <Careers />
      </div>
    </div>
  )
}

export default CareersPage