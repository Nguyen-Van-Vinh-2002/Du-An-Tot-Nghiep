import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom mb-10">
                <Navbar.Brand className="mx-auto">Admin Quản lý</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="login" className="text-white">
                            <FontAwesomeIcon icon={faSignInAlt} className="icon-color" /> Đăng nhập
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 px-4">
                {/* Sản phẩm */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
                    <div className="px-6 py-4">
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-gray-800">Sản phẩm</span>
                            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-sm">New</div>
                        </div>
                        <div className="text-gray-600 mt-2">Tổng số sản phẩm hiện có</div>
                        <div className="text-3xl font-semibold text-gray-700 mt-1">...</div>
                    </div>
                    <div className="px-6 py-4">
                        <Link to="./products/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Xem chi tiết</Link>
                    </div>
                </div>
                {/* User */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
                    <div className="px-6 py-4">
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-gray-800">Tài khoản </span>
                            <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-sm">Active</div>
                        </div>
                        <div className="text-gray-600 mt-2">Số lượng người dùng</div>
                        <div className="text-3xl font-semibold text-gray-700 mt-1">...</div>
                    </div>
                    <div className="px-6 py-4">
                        <Link to="./users/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Xem chi tiết</Link>
                    </div>
                </div>
                {/* Tổng đơn hàng */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
                    <div className="px-6 py-4">
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-gray-800">Tổng đơn hàng</span>
                            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">High</div>
                        </div>
                        <div className="text-gray-600 mt-2">Tổng số đơn hàng</div>
                        <div className="text-3xl font-semibold text-gray-700 mt-1">...</div>
                    </div>
                    <div className="px-6 py-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Xem chi tiết</button>
                    </div>
                </div>
                {/* Doanh thu */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
                    <div className="px-6 py-4">
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-gray-800">Doanh thu</span>
                            <div className="bg-purple-500 text-white px-2 py-1 rounded-full text-sm">Monthly</div>
                        </div>
                        <div className="text-gray-600 mt-2">Tổng doanh thu</div>
                        <div className="text-3xl font-semibold text-gray-700 mt-1">...</div>
                    </div>
                    <div className="px-6 py-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Xem chi tiết</button>
                    </div>
                </div>
                 {/* Tin Tức */}
                 <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
                    <div className="px-6 py-4">
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-gray-800">Tin Tức</span>
                            <div className="bg-purple-500 text-white px-2 py-1 rounded-full text-sm">Monthly</div>
                        </div>
                        <div className="text-gray-600 mt-2">Tổng tin tức</div>
                        <div className="text-3xl font-semibold text-gray-700 mt-1">...</div>
                    </div>
                    <div className="px-6 py-4">
                        <Link to="./blog/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Xem chi tiết</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
