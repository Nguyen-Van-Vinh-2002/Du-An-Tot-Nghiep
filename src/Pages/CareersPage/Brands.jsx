import React from 'react';
import '../../App.css'
import '../../assets/css/brands.css'

const Brands = () => {
    return (
        <main class="py-5">
            <div class="container">
                <h2 class="text-center fw-bold">Màn hình</h2>
                <div className="group brands row">
                    <button class="col-1 rounded-start-5">{'<'}</button>
                    <div class="table-responsive col-10">
                        <table class="m-auto brand-table">
                            <tr class="m-auto">
                                <th class="m-auto"><button class=" px-5 rounded-5" type="button"><img src="https://macone.vn/wp-content/uploads/2023/05/Man-Hinh-Asus.png" alt="" /><p>Màn hình Asus</p></button></th>
                                <th class="m-auto"><button class=" px-5 rounded-5" type="button"><img src="https://macone.vn/wp-content/uploads/2023/05/Man-Hinh-Asus.png" alt="" /><p>Màn hình Asus</p></button></th>
                                <th class="m-auto"><button class=" px-5 rounded-5" type="button"><img src="https://macone.vn/wp-content/uploads/2023/05/Man-Hinh-Asus.png" alt="" /><p>Màn hình Asus</p></button></th>
                                <th class="m-auto"><button class=" px-5 rounded-5" type="button"><img src="https://macone.vn/wp-content/uploads/2023/05/Man-Hinh-Asus.png" alt="" /><p>Màn hình Asus</p></button></th>
                            </tr>
                        </table>
                    </div>
                    <button class="col-1 rounded-end-5">{'>'}</button>
                </div>
            </div>
        </main>
    );
};

export default Brands;