import React, { useState, useEffect } from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHistory } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Products = () => {
    // State để lưu trữ danh sách sản phẩm đã chọn
    const [selectedProducts, setSelectedProducts] = useState([]);
    
    // State để lưu trạng thái checkbox "Chọn tất cả"
    const [selectAll, setSelectAll] = useState(false);
    
    // State để xác định liệu có ít nhất một sản phẩm nào đó được chọn không
    const [anySelected, setAnySelected] = useState(false);

    // Hàm xử lý khi chọn một sản phẩm
    const handleProductSelect = (productId) => {
        if (selectedProducts.includes(productId)) {
            // Nếu sản phẩm đã được chọn, loại bỏ nó khỏi danh sách đã chọn
            setSelectedProducts(selectedProducts.filter(id => id !== productId));
        } else {
            // Nếu sản phẩm chưa được chọn, thêm nó vào danh sách đã chọn
            setSelectedProducts([...selectedProducts, productId]);
        }
    };

    // Hàm xử lý khi chọn checkbox "Chọn tất cả"
    const handleSelectAll = () => {
        if (selectAll) {
            // Nếu đã chọn "Chọn tất cả", bỏ chọn tất cả sản phẩm
            setSelectedProducts([]);
        } else {
            // Nếu chưa chọn "Chọn tất cả", chọn tất cả sản phẩm
            // Thực hiện lấy danh sách id của tất cả sản phẩm và gán cho selectedProducts
            // Đây là nơi bạn lấy danh sách id của tất cả sản phẩm, có thể lấy từ API hoặc một nguồn dữ liệu khác
            setSelectedProducts([1, 2, 3]); // Ví dụ danh sách id là [1, 2, 3]
        }
        // Cập nhật trạng thái của checkbox "Chọn tất cả"
        setSelectAll(!selectAll);
    };

    // Xác định trạng thái của checkbox "Chọn tất cả" và nút xoá
    useEffect(() => {
        if (selectedProducts.length > 1) {
            // Nếu có ít nhất một sản phẩm được chọn, setAnySelected thành true
            setAnySelected(true);
        } else {
            // Nếu không có sản phẩm nào được chọn, setAnySelected thành false
            setAnySelected(false);
        }
    }, [selectedProducts]);

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
                <Navbar.Brand href="/admin/products">Quản Lý Các sản Phẩm</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="purchase-history" className="register">
                            <FontAwesomeIcon icon={faHistory} /> Lịch sử mua hàng
                        </Nav.Link>
                        <Nav.Link href="#search" className="search">
                            <FontAwesomeIcon icon={faSearch} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="container mx-auto py-8">
                <div className="flex">
                    <div className="w-1/5 mr-8">
                        <h2 className="text-lg font-bold mb-4 text-center text-gray-800">Danh mục sản phẩm</h2>
                        <ul>
                            <li>
                                <Link to="/category1" className="block py-2 px-4 text-center text-gray-700 hover:bg-gray-200 hover:text-blue-700 rounded-md transition duration-300">Màn hình</Link>
                            </li>
                            <li>
                                <Link to="/category2" className="block py-2 px-4 text-center text-gray-700 hover:bg-gray-200 hover:text-blue-700 rounded-md transition duration-300">Phụ kiện</Link>
                            </li>
                            <li>
                                <NavDropdown title="MacBook" id="basic-nav-dropdown" className="text-center block py-2 px-4 text-center text-gray-700 hover:bg-gray-200 hover:text-blue-700 rounded-md transition duration-300">
                                    <NavDropdown.Item><Link to="/macbook-air" className="text-gray-700 hover:text-blue-700">MacBook Air</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/macbook-pro" className="text-gray-700 hover:text-blue-700">MacBook Pro</Link></NavDropdown.Item>
                                </NavDropdown>
                            </li>
                        </ul>
                    </div>
                    <div className="w-4/5">
                        <h1 className="text-3xl font-bold mb-4 space-below">Danh sách sản phẩm</h1>
                        {anySelected && ( // Hiển thị nút xoá khi có ít nhất một sản phẩm được chọn
                            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none">Xoá</button>

                        )}
                        <table className="table-auto w-full border border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">
                                        <input
                                            type="checkbox"
                                            onChange={handleSelectAll}
                                            checked={selectAll}
                                        />
                                    </th>
                                    <th className="px-4 py-2">Hình ảnh</th>
                                    <th className="px-4 py-2">Tên sản phẩm</th>
                                    <th className="px-4 py-2">Mô tả</th>
                                    <th className="px-4 py-2">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border border-collapse'>
                                    <td className="px-4 py-2">
                                        <input
                                            type="checkbox"
                                            onChange={() => handleProductSelect(1)}
                                            checked={selectedProducts.includes(1)}
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        <img src="https://via.placeholder.com/300" alt="Product" className="w-24 h-auto" />
                                    </td>
                                    <td className="px-4 py-2">Tên sản phẩm</td>
                                    <td className="px-4 py-2">Mô tả sản phẩm</td>
                                    <td className="px-4 py-2">
                                        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 transition duration-300">Sửa</button>
                                        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-300">Xoá</button>

                                    </td>
                                </tr>

                         
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
