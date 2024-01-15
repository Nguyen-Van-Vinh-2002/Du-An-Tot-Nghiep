import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerVideo from '../../images/Banner.mp4';
import '../../images/Banner.mp4'; // Import a CSS file for custom styles

const Banner = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <Container fluid>
      <div
        className={`video-banner ${isMouseOver ? 'hovered' : ''}`}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <video autoPlay muted loop className="banner-video">
          <source src={BannerVideo} type="video/mp4" />
        </video>
      </div>
    </Container>
  );
};

export default Banner;
