const Brands = () => {
    return (
        <main class="">
            <div class="container">
                <h2 class="text-center fw-bold">Màn hình</h2>
                <div className="group brands row">
                    <button class="col-1 rounded-start-5"><i class="bi bi-arrow-left"></i></button>
                    <div class="table-responsive col-10">
                        <table class="m-auto brand-table">
                            <tr class="m-auto">
                                <th class="m-auto"><button class=" px-2 rounded-4 mx-3" type="button"><img src="https://macone.vn/wp-content/uploads/2023/05/Man-Hinh-Asus.png" alt="" /><p>Màn hình Asus</p></button></th>
                                <th class="m-auto"><button class=" px-2 rounded-4 mx-3" type="button"><img src="https://macone.vn/wp-content/uploads/2023/05/Man-Hinh-Asus.png" alt="" /><p>Màn hình Asus</p></button></th>
                                <th class="m-auto"><button class=" px-2 rounded-4 mx-3" type="button"><img src="https://macone.vn/wp-content/uploads/2023/05/Man-Hinh-Asus.png" alt="" /><p>Màn hình Asus</p></button></th>
                                <th class="m-auto"><button class=" px-2 rounded-4 mx-3" type="button"><img src="https://macone.vn/wp-content/uploads/2023/05/Man-Hinh-Asus.png" alt="" /><p>Màn hình Asus</p></button></th>
                            </tr>
                        </table>
                    </div>
                    <button class="col-1 rounded-end-5"><i class="bi bi-arrow-right"></i></button>
                </div>
            </div>
        </main>
    );
};

export default Brands;