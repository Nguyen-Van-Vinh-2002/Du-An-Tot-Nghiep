import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../App.css'
import '../../assets/css/cart.css'

const Cart = () => {
    return (
        <main class="bg-dark-subtle py-5">
            <div class="cart container bg-dark-subtle">
                <div class="table-responsive bg-white border-0 rounded-top-5">
                    <table className="table mt-4 text-center border-none fs-6 bg-white ">
                        <thead class="border-bottom-0 text-uppercase">
                            <tr>
                                <th scope='col' class="col-1">#</th>
                                <th scope='col' class="col-4">Sản phẩm</th>
                                <th scope='col' class="col-1">Số lượng</th>
                                <th scope='col' class="col-2">Đơn giá</th>
                                <th scope='col' class="col-2">Màu sắc</th>
                                <th scope='col' colspan="2" class="col-2">Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody class="align-middle table-group-divide">
                            <tr class="border-white">
                                <td scope='row'>1</td>
                                <td class="row">
                                    <img class="col-4" src="https://macone.vn/wp-content/uploads/2023/11/Macbook-14-inch-Silver-300x250.png" alt="" />
                                    <div class="col-8 text-start">
                                        <a class="icon-link icon-link-hover link-underline link-underline-opacity-0" href="#">MacBook Pro 2023 14 inch Apple M3 8-Core CPU 10-Core GPU – NEW</a>
                                        <div class="add">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="" />
                                                <label class="form-check-label" for=""> Default checkbox </label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="quantity bg-white">
                                    <button class="col-3 border-0 rounded-start-circle fs-3">-</button>
                                    <input type="number" class="col-6 border-0 text-center" name="" id="" value="10" />
                                    <button class="col-3 border-0 rounded-end-circle fs-4">+</button>
                                </td>
                                <td>60.000<div class="border-0">VNĐ</div></td>
                                <td>
                                    <select class="form-control border-secondary-subtle" name="" id="">
                                        <option value="0">Bạc</option>
                                        <option value="1">Đen</option>
                                    </select>
                                </td>
                                <td>600.000<div class="border-0">VNĐ</div></td>
                                <td><button class="border-0 delete-product"><i class="bi bi-trash3"></i></button></td>
                            </tr>
                            <tr class="border-white">
                                <td scope='row'>2</td>
                                <td class="row">
                                    <img class="col-4" src="https://macone.vn/wp-content/uploads/2023/11/Macbook-14-inch-Silver-300x250.png" alt="" />
                                    <div class="col-8 text-start">
                                        <a class="icon-link icon-link-hover link-underline link-underline-opacity-0" href="#">MacBook Pro 2023 14 inch Apple M3 8-Core CPU 10-Core GPU – NEW</a>
                                        <div class="add">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="" />
                                                <label class="form-check-label" for=""> Default checkbox </label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="quantity bg-white">
                                    <button class="col-3 border-0 rounded-start-circle fs-3">-</button>
                                    <input type="number" class="col-6 border-0 text-center" name="" id="" value="10" />
                                    <button class="col-3 border-0 rounded-end-circle fs-4">+</button>
                                </td>
                                <td>60.000<div class="border-0">VNĐ</div></td>
                                <td>
                                    <select class="form-control border-secondary-subtle" name="" id="">
                                        <option value="0">Bạc</option>
                                        <option value="1">Đen</option>
                                    </select>
                                </td>
                                <td>600.000<div class="border-0">VNĐ</div></td>
                                <td><button class="border-0 delete-product"><i class="bi bi-trash3"></i></button></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <div class="total fs-4 bg-white border-0 rounded-bottom-5">
                    <div class="row px-5">
                        <p class="text-start col-6" >Tổng thanh toán(Tạm tính)</p>
                        <p class="col-6 underline-200 text-end">1.200.000<span class="border-0">VNĐ</span></p>
                    </div>
                </div>
            </div>
            <div class="cart container bg-dark-subtle">
                <div className='bg-white border-0 rounded-5'>
                    <form action="" method="" className='row m-1 mb-3'>
                        <div className='col-12 col-lg-9 col-xl-9 ps-4 row'>
                            <div className='col-12 col-md-6 col-lg-4 col-xl-4 pt-2'>
                                <label htmlFor="" className='fw-bold'>Họ và tên</label>
                                <input class='form-control' type="text" />
                                <label htmlFor="" className="error text-danger">Vui lòng nhập Họ và tên</label>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 col-xl-4 pt-2'>
                                <label htmlFor="" className='fw-bold'>Họ và tên</label>
                                <input class='form-control' type="text" />
                                <label htmlFor="" className="error text-danger">Vui lòng nhập Họ và tên</label>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 col-xl-4 pt-2'>
                                <label htmlFor="" className='fw-bold'>Họ và tên</label>
                                <input class='form-control' type="text" />
                                <label htmlFor="" className="error text-danger">Vui lòng nhập Họ và tên</label>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 col-xl-4 pt-2'>
                                <label htmlFor="" className='fw-bold'>Họ và tên</label>
                                <input class='form-control' type="text" />
                                <label htmlFor="" className="error text-danger">Vui lòng nhập Họ và tên</label>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 col-xl-4 pt-2'>
                                <label htmlFor="" className='fw-bold'>Họ và tên</label>
                                <input class='form-control' type="text" />
                                <label htmlFor="" className="error text-danger">Vui lòng nhập Họ và tên</label>
                            </div>
                        </div>
                        <div className='col-12 col-xl-3 col-lg-3 col-md-3 row ps-4 mb-3'>
                            <button style={{maxHeight:'50px'}} className='btn fw-bold btn-success just-content-center' type="submit">Thanh toán</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Cart;
