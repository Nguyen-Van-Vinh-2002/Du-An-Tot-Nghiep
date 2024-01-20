// HistoryComponent.js
import React from 'react';
import { Table, Button } from 'react-bootstrap';

const HistoryComponent = ({ purchaseHistory }) => {
  return (
    <div>
      <h2>Lịch sử mua hàng</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá trị đơn hàng</th>
            <th>Phương thức thanh toán</th>
            <th>Ngày mua</th>
            <th>Địa chỉ giao hàng</th>
            <th>Trạng thái đơn hàng</th>
            <th>Mã đơn hàng</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {purchaseHistory.map((purchase, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{purchase.productName}</td>
              <td>{purchase.quantity}</td>
              <td>${purchase.orderValue.toFixed(2)}</td>
              <td>{purchase.paymentMethod}</td>
              <td>{purchase.purchaseDate}</td>
              <td>{purchase.shippingAddress}</td>
              <td>{purchase.orderStatus}</td>
              <td>{purchase.orderCode}</td>
              <td>
                <Button variant="info">Xem chi tiết</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HistoryComponent;
