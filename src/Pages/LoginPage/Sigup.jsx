// src/components/SignUp.js
import '../../App.css';
import '../../assets/css/Signup.css';

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { SignupUser } from './UserAction'

function Login(props) {
  const dispatch = useDispatch()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => {
    if (password === confirmPassword) {
      dispatch(SignupUser(data.username, data.mail, data.password, 'image.png', '1'))
    } else {
      alert("wrong repeat password")
    }
  }

  return (
    <div className="signup-page">
      <h2>ĐĂNG KÍ</h2>
      <form onSubmit={handleSubmit(onSubmit)} classname="form-signup">
        <input {...register("username")} placeholder="Name" required></input>
        <input
          {...register("mail")}
          placeholder="Email"
          type="email"
          required
        ></input>
        <input
          {...register("password")}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <input
          {...register("repeat password")}
          placeholder=" Repeat password"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        ></input>

        <input type="submit" value="Đăng Kí"></input>
      </form>
    </div>
  );
}

export default Login;