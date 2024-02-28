import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { login } from './UserAction'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import '../../assets/css/Login.css';

function makeRandomKey(length) {
    let result = '';
    const characters = '0123456789';
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * length));
        counter += 1;
    }
    return result;
}

function Login(props) {
    const dispatch = useDispatch();
    const history = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const user = useSelector((state) => state.userSignin);
    const { userInfo, error } = user;
    const JWT_KEY = String(makeRandomKey(4));
    localStorage.setItem('JWT_KEY', JWT_KEY)
    console.log(localStorage.getItem('JWT_KEY'));
    const onSubmit = (data) => {
        dispatch(login(data.username, data.password, JWT_KEY));
    };


    useEffect(() => {
        if (userInfo) {
            history("/");
        }
    });

    return (
        <div class="login-page">
            <h2> ĐĂNG NHẬP </h2>
            <form onSubmit={handleSubmit(onSubmit)} class="form-login">
                <input {...register("username")} placeholder="Email" required></input>
                <input
                    {...register("password")}
                    placeholder="Password"
                    type="password"
                    required
                ></input>

                <input type="submit" value="Đăng Nhập"></input>
                {error ? <h2>{error}</h2> : <></>}
                <Link to="/signup">Tạo tài khoản?</Link>
            </form>
        </div>
    );
}

export default Login;