import React from 'react';
import '../../App.css';

const ShoppingItem = ({ productName, title, price, image }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={productName} />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">{title}</p>
        <p className="card-text">${price}</p>
        <a href="/cart" className="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  );
};

export default ShoppingItem;
