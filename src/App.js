import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';
import NewsPage from './Pages/NewsPage/NewsPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignupPage from './Pages/LoginPage/SignupPage';
import HstoryPage from './Pages/HstoryPage/HstoryPage';
import CartPage from './Pages/CartPage/CartPage';
import ScreenPage from './Pages/ScreenPage/ScreenPage';
import Admin from './Pages/Admin/dashboard';
import Products from './Pages/Admin/products';
import UserManagement from './Pages/Admin/users';
import ProductDetail from './Pages/HomePage/ProductDetail';
import Blog from './Pages/Admin/Blog/Blog';
import AddBlog from './Pages/Admin/Blog/AddBlog';
import UpdateBlog from './Pages/Admin/Blog/UpdateBlog';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} /> 
          <Route path="/products" element={<ProductPage/>}/>
          <Route path="/products/:id" element={<ProductDetail/>}/>
          <Route path="/news" element={<NewsPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/purchase-history" element={<HstoryPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/screen" element={<ScreenPage/>}/>
           <Route path="/admin" element={<Admin/>}/>
           <Route path="/admin/products" element={<Products/>}/>
           <Route path="/admin/blog" element={<Blog/>}/>
           <Route path="/admin/blog/add" element={<AddBlog/>}/>
           <Route path="/admin/blog/:id/update" element={<UpdateBlog/>}/>
           <Route path="/admin/users" element={<UserManagement/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
