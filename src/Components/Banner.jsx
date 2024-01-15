import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
  return (
    <Carousel interval={1000}>
      <Carousel.Item style={{ height: '600px' }}>
        <img
          className="d-block w-100"
          src="https://macstores.vn/wp-content/uploads/2019/05/banner-macbook-air.jpg" 
          alt="First slide"
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '600px' }}>
        <img
          className="d-block w-100"
          src="https://macintelgroup.co.in/wp-content/uploads/2020/12/MacBook-Air_Web-Banner_Available-Now_2.jpg"
          alt="Second slide"
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '600px' }}>
        <img
          className="d-block w-100"
          src="https://alltop.vn/backend/media/images/posts/388/Ung_dung_can_thiet_nhat_cho_nguoi_moi_dung_Macbook-14898.jpg"
          alt="Third slide"
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
