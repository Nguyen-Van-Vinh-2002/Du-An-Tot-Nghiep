import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSignInAlt, faHistory } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const UserManagement = () => {
    // Hàm xử lý sự kiện khi click vào nút Xoá tài khoản
    const handleDeleteAccount = (userId) => {
        // Gọi hàm xử lý việc xoá tài khoản với userId được truyền vào
        console.log(`Xoá tài khoản với ID: ${userId}`);
    };

    // Hàm xử lý sự kiện khi click vào nút Đổi mật khẩu
    const handleChangePassword = (userId) => {
        // Gọi hàm xử lý việc đổi mật khẩu với userId được truyền vào
        console.log(`Đổi mật khẩu cho tài khoản với ID: ${userId}`);
    };

    return (
  
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Quản lý tài khoản</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* User Card */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">John Doe</h2>
                        <p className="text-gray-600 mb-2">john.doe@example.com</p>
                        <p className="text-gray-600 mb-2">Admin</p>
                        <div className="flex justify-between items-center">
                            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Sửa</button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600" onClick={() => handleDeleteAccount('john_doe_id')}>Xoá</button>
                        </div>
                    </div>
                </div>

                {/* User Card */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">Jane Doe</h2>
                        <p className="text-gray-600 mb-2">jane.doe@example.com</p>
                        <p className="text-gray-600 mb-2">Member</p>
                        <div className="flex justify-between items-center">
                            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Sửa</button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600" onClick={() => handleDeleteAccount('jane_doe_id')}>Xoá</button>
                        </div>
                    </div>
                </div>

                {/* User Card */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">Mark Smith</h2>
                        <p className="text-gray-600 mb-2">mark.smith@example.com</p>
                        <p className="text-gray-600 mb-2">Member</p>
                        <div className="flex justify-between items-center">
                            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Sửa</button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600" onClick={() => handleDeleteAccount('mark_smith_id')}>Xoá</button>
                        </div>
                    </div>
                </div>

                {/* Thêm các thẻ người dùng khác ở đây */}
            </div>
        </div>
    );
}

export default UserManagement;
