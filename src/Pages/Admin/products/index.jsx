import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSignInAlt, faHistory } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Products = () => {
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
                    {/* Danh mục sản phẩm */}
                    <div className="w-1/5 mr-8">

                        <h2 className="text-lg font-bold mb-4 text-center text-gray-800">Danh mục sản phẩm</h2>

                        <ul>

                            <li>
                                <Link to="/category1" className="block py-2 px-4 text-center text-gray-700 hover:bg-gray-200 hover:text-blue-700 rounded-md transition duration-300">Màn hình</Link>
                            </li>
                            <li>
                                <Link to="/category2" className="block py-2 px-4 text-center text-gray-700 hover:bg-gray-200 hover:text-blue-700 rounded-md transition duration-300">Phụ kiện</Link>
                            </li>
                            {/* Dropdown cho MacBook */}
                            <li>
                                <NavDropdown title="MacBook" id="basic-nav-dropdown" className="text-center block py-2 px-4 text-center text-gray-700 hover:bg-gray-200 hover:text-blue-700 rounded-md transition duration-300">
                                    <NavDropdown.Item><Link to="/macbook-air" className="text-gray-700 hover:text-blue-700">MacBook Air</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/macbook-pro" className="text-gray-700 hover:text-blue-700">MacBook Pro</Link></NavDropdown.Item>
                                </NavDropdown>
                            </li>
                        </ul>

                    </div>

                    {/* Danh sách sản phẩm */}
                    <div className="w-4/5">
                        <h1 className="text-3xl font-bold mb-4">Danh sách sản phẩm</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {/* Mỗi sản phẩm */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
                                <img className="w-full h-48 object-cover" src="https://via.placeholder.com/300" alt="Product" />
                                <div className="p-4">
                                    <h2 className="text-xl font-bold mb-2">Tên sản phẩm</h2>
                                    <p className="text-gray-600 mb-2">Mô tả sản phẩm</p>
                                    <div className="flex justify-between items-center">
                                        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 transition duration-300">Sửa</button>
                                        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-300">Xoá</button>
                                    </div>
                                </div>
                            </div>
                            {/* Thêm các sản phẩm khác ở đây */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
                                <img className="w-full h-48 object-cover" src="https://via.placeholder.com/300" alt="Product" />
                                <div className="p-4">
                                    <h2 className="text-xl font-bold mb-2">Tên sản phẩm</h2>
                                    <p className="text-gray-600 mb-2">Mô tả sản phẩm</p>
                                    <div className="flex justify-between items-center">
                                        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 transition duration-300">Sửa</button>
                                        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-300">Xoá</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
                                <img className="w-full h-48 object-cover" src="https://via.placeholder.com/300" alt="Product" />
                                <div className="p-4">
                                    <h2 className="text-xl font-bold mb-2">Tên sản phẩm</h2>
                                    <p className="text-gray-600 mb-2">Mô tả sản phẩm</p>
                                    <div className="flex justify-between items-center">
                                        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 transition duration-300">Sửa</button>
                                        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-300">Xoá</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
                                <img className="w-full h-48 object-cover" src="https://via.placeholder.com/300" alt="Product" />
                                <div className="p-4">
                                    <h2 className="text-xl font-bold mb-2">Tên sản phẩm</h2>
                                    <p className="text-gray-600 mb-2">Mô tả sản phẩm</p>
                                    <div className="flex justify-between items-center">
                                        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 transition duration-300">Sửa</button>
                                        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-300">Xoá</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Products;
