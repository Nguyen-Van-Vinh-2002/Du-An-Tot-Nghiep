const Careers = () => {
  return (
    <div class="container">
      <div class="title"><h3>Sản phẩm: Màn hình</h3></div>
      <div className="sort-filter row ">
        <div className="sort-price col-12 col-sm-12 col-xl-8 col-lg-8 col-md-12 row mb-1">
          <button className="rounded-4 border-0 px-1 my-1 col-6 col-sm-6 col-xl-2 col-lg-3 col-md-4 btn btn-light">Mặc định</button>
          <button className="rounded-4 border-0 px-1 my-1 col-6 col-sm-6 col-xl-2 col-lg-3 col-md-4 btn btn-light">Dưới 500K</button>
          <button className="rounded-4 border-0 px-1 my-1 col-6 col-sm-6 col-xl-2 col-lg-3 col-md-4 btn btn-light">500K - 1 Triệu</button>
          <button className="rounded-4 border-0 px-1 my-1 col-6 col-sm-6 col-xl-2 col-lg-3 col-md-4 btn btn-light">1 - 2 Triệu</button>
          <button className="rounded-4 border-0 px-1 my-1 col-6 col-sm-6 col-xl-2 col-lg-3 col-md-4 btn btn-light">2 - 5 Triệu</button>
          <button className="rounded-4 border-0 px-1 my-1 col-6 col-sm-6 col-xl-2 col-lg-3 col-md-4 btn btn-light">Trên 5 Triệu</button>
        </div>
        <div className="more-filter d-flex col-12 col-sm-12 col-xl-4 col-lg-4 col-md-12 row mb-3">
          <div class="dropdown rounded-4 sort-select col-6 col-sm-6 col-xl-4 col-lg-9 col-md-4 my-1 px-1">
            <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sắp xếp theo</button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Giá Thấp đến Cao</a></li>
              <li><a class="dropdown-item" href="#">Giá Cao đến Thấp</a></li>
            </ul>
          </div>
          <div class="dropdown rounded-4 status-select col-6 col-sm-6 col-xl-4 col-lg-9 col-md-4 my-1 px-1">
            <button class="btn btn-light  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Tình trạng</button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Hàng mới</a></li>
              <li><a class="dropdown-item" href="#">Hàng cũ</a></li>
            </ul>
          </div>
          <button class="btn btn-light rounded-4 border-0 px-1 my-1 col-6 col-sm-6 col-xl-4 col-lg-6 col-md-4">So sánh</button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
