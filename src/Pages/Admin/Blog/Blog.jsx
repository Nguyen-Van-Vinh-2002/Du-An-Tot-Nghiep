import React from 'react';
import { Space, Table, Tag } from 'antd';
import './styleBlog.css'
import { Link } from "react-router-dom";
import { Button } from "antd";
const Blog = () => {
  
      
      const columns= [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Tiêu đề',
          dataIndex: 'tieude',
          key: 'tieude',
        },
        {
          title: 'Nội dung',
          dataIndex: 'noidung',
          key: 'noidung',
        },
        {
          title: 'Image',
          key: 'image',
          dataIndex: 'image',
        },
        {
            title: 'Ngày đăng',
            key: 'ngaydang',
            dataIndex: 'ngaydang',
          },
        {
          title: 'Hành động',
          key: 'hanhdong',
          render: (_, record) => (
            <Space size="middle">
              <Link to={'/admin/blog/:id/update'}><button style={{background:"green",color:"white",}}>Update</button></Link>
              <button style={{background:"red",color:"white"}}>Delete</button>
            </Space>
          ),
        },
      ];
      
      const data= [
        {
          key: '1',
          id: '1',
          tieude: 'Tin tuc 1',
          noidung: 'Noi dung 1',
          image:'Image 1',
          ngaydang:'14/02/2024'
        },
        {
            key: '1',
            id: '1',
            tieude: 'Tin tuc 1',
            noidung: 'Noi dung 1',
            image:'Image 1',
            ngaydang:'14/02/2024'
          },
          {
            key: '1',
            id: '1',
            tieude: 'Tin tuc 1',
            noidung: 'Noi dung 1',
            image:'Image 1',
            ngaydang:'14/02/2024'
          },
      
      ];
  return <div>
    <h1 style={{fontWeight:"bold",fontSize:"30px",paddingLeft:"15px",paddingBottom:"20px",
paddingTop:"20px"}}>Quản lý tin tức</h1>
<Link to="add">
          <Button
            className="menu-link menu-toggle"
            style={{ marginBottom: "10px",marginLeft:"15px" }}
          >
            <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
            <div data-i18n="Authentications">Thêm Blog</div>
          </Button>
        </Link>
    <Table columns={columns} dataSource={data} />;
  </div>
}

export default Blog