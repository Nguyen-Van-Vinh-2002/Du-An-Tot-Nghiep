// FavoriteProducts.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../../App.css';  // Import file CSS mới
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const FavoriteProducts = () => {
  const favoriteProducts = [
    { id: 1, name: 'Product 1', price: '$19.99', rating: 4.5, image: 'https://cdn.tgdd.vn/Products/Images/44/231244/macbook-air-m1-2020-silver-600x600.jpg' },
    { id: 2, name: 'Product 2', price: '$29.99', rating: 5, image: 'https://cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-bac-600x600.jpg' },
    { id: 3, name: 'Product 3', price: '$39.99', rating: 3.5, image: 'https://cdn.tgdd.vn/Products/Images/44/309016/apple-macbook-air-m2-2023-16gb-silver-thumb-600x600.jpg' },
    { id: 4, name: 'Product 4', price: '$49.99', rating: 4.8, image: 'https://cdn.tgdd.vn/Products/Images/44/282828/apple-macbook-pro-13-inch-m2-2022-xam-600x600.jpg' },
    { id: 5, name: 'Product 5', price: '$59.99', rating: 4.2, image: 'https://cdn.tgdd.vn/Products/Images/44/318228/macbook-pro-14-inch-m3-2023-311023-095050-600x600.jpg' },
    { id: 6, name: 'Product 6', price: '$59.99', rating: 4.2, image: 'https://cdn.tgdd.vn/Products/Images/44/289441/apple-macbook-air-m2-2022-16gb-600x600.jpg' },
    { id: 7, name: 'Product 7', price: '$59.99', rating: 4.2, image: 'https://cdn.tgdd.vn/Products/Images/44/309018/apple-macbook-air-m2-2023-starlight-thumb-600x600.jpg' },
    { id: 8, name: 'Product 8', price: '$59.99', rating: 4.2, image: 'https://cdn.tgdd.vn/Products/Images/44/309017/apple-macbook-air-15-inch-m2-2023-midnight-thumb-1-600x600.jpg' },
    { id: 9, name: 'Product 9', price: '$59.99', rating: 4.2, image: 'https://cdn.tgdd.vn/Products/Images/44/320981/macbook-pro-14-inch-m3-2023-16gb-thumb-600x600.jpg' },
    { id: 10, name: 'Product 10', price: '$59.99', rating: 4.2, image: 'https://cdn.tgdd.vn/Products/Images/44/320981/macbook-pro-14-inch-m3-2023-16gb-thumb-600x600.jpg' },
    
    // Add more products as needed
  ];

  return (
    <Container className="favorite-products-container">
      <h1 className="text-center mt-5 mb-4">Sản phẩm yêu thích</h1>
      <Row xs={1} md={2} lg={3} xl={5} className="g-4">
        {favoriteProducts.map((product) => (
          <Col key={product.id}>
            <Card className="favorite-card">
              <div className="image-container">
                <Card.Img variant="top" src={product.image} alt={product.name} className="card-img-top" />
              </div>
              <Card.Body>
                <Card.Title className="card-title">{product.name}</Card.Title>
                <Card.Text className="card-price">
                  Giá: {product.price}
                </Card.Text>
                <div className="rating-container">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={`star ${index + 1 <= product.rating ? 'filled' : ''}`}>★</span>
                  ))}
                </div>
                <Button variant="primary" className="btn-details">
                  <Link to={`/products/${product.id}`}
                  style={{color:"white",textDecoration:'none'}}
                  >
                  Xem chi tiết
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FavoriteProducts;
