import React from 'react';
import Header from '../../Components/Header';
import Banner from './BannerProductPage';
import CategoryMenu from './CategoryMenu';
import '../../App.css';
import ListProduct from './ListProductPage';

const ProductPage = () => {
  return (
    <div>
      <Header />
      <CategoryMenu />
      <h1 className='title'>MacBook <span className='sp'>Sản phẩm vượt thời đại</span></h1>
      <Banner />
      <ListProduct />
    </div>
  );
}

export default ProductPage;
