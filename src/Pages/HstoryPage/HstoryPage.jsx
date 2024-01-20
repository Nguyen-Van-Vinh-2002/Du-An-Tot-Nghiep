import React from 'react'
import Header from '../../Components/Header'
import HistoryComponent from './Hstory';

const HstoryPage = () => {
  const purchaseHistory = [
    {
      productName: 'Sản phẩm A',
      quantity: 2,
      orderValue: 49.98,
      paymentMethod: 'Thẻ tín dụng',
      purchaseDate: '01/20/2024',
      shippingAddress: '123 Đường ABC, Quận XYZ, TP.HCM',
      orderStatus: 'Đã giao hàng',
      orderCode: 'DH123456'
    },
    {
      productName: 'Sản phẩm B',
      quantity: 1,
      orderValue: 29.99,
      paymentMethod: 'Chuyển khoản',
      purchaseDate: '01/19/2024',
      shippingAddress: '456 Đường XYZ, Quận ABC, TP.HCM',
      orderStatus: 'Đang vận chuyển',
      orderCode: 'DH789012'
    },
    // Thêm dữ liệu mua hàng khác nếu cần
  ];
  return (
    <div>
        <Header/>
        <HistoryComponent purchaseHistory={purchaseHistory}/>
    </div>
  )
}

export default HstoryPage