import React, { useState, useEffect } from 'react'; // Thêm useEffect vào danh sách nhập

import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';

const ShoppingCart = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://example.com/api/data');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // State để lưu trữ số lượng và màu sắc của sản phẩm
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('Màu mặc định');

    // Hàm xử lý thay đổi số lượng
    const handleQuantityChange = (event) => {
        // Lấy giá trị số lượng từ input
        let newQuantity = parseInt(event.target.value);
    
        // Kiểm tra nếu giá trị số lượng nhỏ hơn 1, đặt giá trị mới là 1
        if (newQuantity < 1) {
            newQuantity = 1;
        }
    
        // Cập nhật giá trị số lượng
        setQuantity(newQuantity);
    };

    // Hàm xử lý thay đổi màu sắc
    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <>
            <Header />
            <div className="bg-gray-100">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-2xl font-bold mb-4">Giỏ hàng</h1>

                    {/* Cart Items */}
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2">Sản phẩm</th>
                                <th className="p-2">Số lượng</th>
                                <th className="p-2">Đơn giá</th>
                                <th className="p-2">Màu sắc</th>
                                <th className="p-2">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-2">
                                    <img src="https://macone.vn/wp-content/uploads/2021/10/HAN00181-Lo%CC%9B%CC%81n-1024x682.jpeg" alt="Product" className="w-32 rounded-md mb-2" />
                                    <div className="text-gray-800 font-bold">MacBook Pro 2022 13 inch Apple M2 8GB RAM 256GB SSD – NEW</div>
                                </td>
                                <td className="border p-2">
                                    <input type="number" value={quantity} onChange={handleQuantityChange} />
                                </td>
                                <td className="border p-2">$10</td>
                                <td className="border p-2">
                                    <select value={color} onChange={handleColorChange}>
                                        <option value="Màu mặc định">Màu mặc định</option>
                                        <option value="Đỏ">Đỏ</option>
                                        <option value="Xanh">Xanh</option>
                                        <option value="Vàng">Vàng</option>
                                    </select>
                                </td>
                                <td className="border p-2">
                                    <button className="px-3 py-1 bg-red-500 text-white rounded-md">Xoá</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Total */}
                    <div className="mt-8 text-right">
                        <div className="text-xl font-bold">Tổng đơn hàng (tạm tính)</div>
                        <button className="mt-4 px-6 py-3 bg-green-500 text-white rounded-md">Thanh toán</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ShoppingCart;
