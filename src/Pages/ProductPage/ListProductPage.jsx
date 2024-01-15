import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingItem from './ShoppingItem';
import '../../App.css';

const ListProduct = () => {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const prices = ['All', '$10 - $20', '$20 - $30', '$30 - $40'];

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
  };

  const productsData = [
    { 
      id: 1,
      name: 'Product 1', 
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
      price: 19.99,
      image: 'https://cdn.tgdd.vn/Products/Images/44/264420/apple-macbook-air-m1-2020-8-core-gpu-vang-1-1-600x600.jpg',
    },
    { 
      id: 2,
      name: 'Product 2', 
      title: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      price: 29.99,
      image: 'https://cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-bac-600x600.jpg',
    },
    { 
      id: 3,
      name: 'Product 3', 
      title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', 
      price: 39.99,
      image: 'https://cdn.tgdd.vn/Products/Images/44/309018/apple-macbook-air-m2-2023-starlight-thumb-600x600.jpg',
    },
    { 
      id: 4,
      name: 'Product 4', 
      title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', 
      price: 39.99,
      image: 'https://cdn.tgdd.vn/Products/Images/44/320981/macbook-pro-14-inch-m3-2023-16gb-thumb-600x600.jpg',
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12 mb-4">
          <label>Filter by Price: </label>
          <select
            onChange={(e) => handlePriceChange(e.target.value)}
            value={selectedPrice || 'All'}
          >
            {prices.map((price, index) => (
              <option key={index} value={price}>
                {price}
              </option>
            ))}
          </select>
        </div>
        {productsData
          .filter((product) => {
            if (selectedPrice === null || selectedPrice === 'All') {
              return true;
            } else {
              const [min, max] = selectedPrice
                .replace('$', '')
                .split(' - ')
                .map((price) => parseFloat(price));
              return product.price >= min && product.price <= max;
            }
          })
          .map((product) => (
            <div key={product.id} className="col-md-3">
              <ShoppingItem
                productName={product.name}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListProduct;
