// CategoryMenu
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptop,
  faHeadphones,
  faChargingStation,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
import '../../App.css'
const CategoryMenu = () => {
  const categories = [
    { name: 'Macbook', icon: faLaptop },
    { name: 'Tai nghe', icon: faHeadphones },
    { name: 'Sạc pin', icon: faChargingStation },
    { name: 'Điện thoại', icon: faMobileAlt },
  ];

  return (
    <div className="category-menu">
      {categories.map((category, index) => (
        <a key={index} href="#">
          <FontAwesomeIcon icon={category.icon} /> {category.name}
        </a>
      ))}
    </div>
  );
};

export default CategoryMenu;
