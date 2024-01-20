import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSignInAlt, faHistory, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    document.body.classList.toggle('show-overlay', showSearch);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
        <Navbar.Brand href="/"> Quỳnh Store </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="products">MacBook</Nav.Link>
            <Nav.Link href="careers">Màn hình</Nav.Link>
            <Nav.Link href="contact">Phụ kiện</Nav.Link>
            <Nav.Link href="news">Tin tức</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="login" className="login">
              <FontAwesomeIcon icon={faSignInAlt} /> Đăng Nhập
            </Nav.Link>
            <Nav.Link href="purchase-history" className="register">
              <FontAwesomeIcon icon={faHistory} /> Lịch sử mua hàng
            </Nav.Link>
            <Nav.Link href="#search" onClick={toggleSearch} className="search">
              <FontAwesomeIcon icon={faSearch} />
            </Nav.Link>
            <Nav.Link href="cart" id="cart-icon">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className={`overlay ${showSearch ? 'show-overlay' : ''}`} onClick={toggleSearch}></div>
      <div className={`form-overlay ${showSearch ? 'show-overlay' : ''}`}>
        <Form inline>
          <FormControl type="text" placeholder="Tìm kiếm..." className="mr-sm-2" />
        </Form>
      </div>
    </>
  );
};

export default Header;
