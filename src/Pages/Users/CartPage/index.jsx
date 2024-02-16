import React, { useState, useEffect } from 'react';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';

const ShoppingCart = () => {
    const [data, setData] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        calculateTotalPrice();
    }, [cartItems]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://example.com/api/data');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalPrice += item.quantity * item.price;
        });
        setTotalPrice(totalPrice);
    };

    return (
        <>
            <Header />
            <div className="bg-gray-100">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-2xl font-bold mb-4">Giỏ hàng</h1>

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
                            {cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td className="border p-2">
                                        <img src={item.image} alt="Product" className="w-32 rounded-md mb-2" />
                                        <div className="text-gray-800 font-bold">{item.name}</div>
                                    </td>
                                    <td className="border p-2">
                                        <input type="number" value={item.quantity} onChange={(e) => {}} />
                                    </td>
                                    <td className="border p-2">${item.price}</td>
                                    <td className="border p-2">
                                        <select value={item.color} onChange={(e) => {}}>
                                            <option value="Màu mặc định">Màu mặc định</option>
                                            <option value="Đỏ">Đỏ</option>
                                            <option value="Xanh">Xanh</option>
                                            <option value="Vàng">Vàng</option>
                                        </select>
                                    </td>
                                    <td className="border p-2">
                                        <button onClick={() => removeFromCart(index)} className="px-3 py-1 bg-red-500 text-white rounded-md">Xoá</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Total */}
                    <div className="mt-8 text-right">
                        <div className="text-xl font-bold">Tổng đơn hàng (tạm tính): {totalPrice}VND</div>
                        <button className="mt-4 px-6 py-3 bg-green-500 text-white rounded-md">Thanh toán</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
        
    );
    
};

export default ShoppingCart;
