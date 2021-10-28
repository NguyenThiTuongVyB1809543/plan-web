import './Product.css';
import { NavLink, Route } from 'react-router-dom';
import React, { useState } from 'react';

function EditProduct() {
    let [ten_san_pham, setTenSP] = useState('');
    let [gia_san_pham, setGiaSP] = useState('');
    let [loai_san_pham, setLoaiSP] = useState('');
    let [img_san_pham, setImgSP] = useState('');
    let [chi_tiet_san_pham, setChiTietSP] = useState('');
    let [trang_thai, setTrangThaiSP] = useState('');
   
    const handleSubmit = (event) => {
        event.preventDefault();
        let product = {
            id: '',
            name: ten_san_pham,
            price: gia_san_pham,
            kind: loai_san_pham,
            img: img_san_pham,
            detail: chi_tiet_san_pham,
            status: trang_thai

        }
        console.log(product);
        
    }
    return(
        <div>
            <Route>
                
                <div class="container">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Tên Sản Phẩm: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name_product"
                                value={ten_san_pham}
                                
                                onChange={(event) => {setTenSP(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                            
                            />
                        </div>
                        <div className="form-group">
                            <label>Giá: </label>
                            <input
                                type="number"
                                className="form-control"
                                name="price_Product"
                                value={gia_san_pham}
                                
                                onChange={(event) => {setGiaSP(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                            
                            />
                        </div>
                        <div className="form-group">
                            <label>Thuộc loại: </label>

                            <select className="form-control" name="kind_Product" value={loai_san_pham} onChange={(event) => {setLoaiSP(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}>
                                    <option value="lili_water">Bông súng</option>
                                    <option value="hibiscus ">Bông bụp</option>
                                    <option value="succulent ">Sen đá</option>
                                    <option value="cactus">Xương rồng</option>
                            </select>


                        </div>
                        <div className="form-group">
                            <label>Hình Ảnh: </label>
                            <input
                                type="file"
                                className="form-control"
                                name="img_Product"
                                value={img_san_pham}
                                onChange={(event) => {setImgSP(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                
                            
                            />
                        </div>
                        <div className="form-group">
                            <label>Chi Tiết: </label>
                            <input
                                type="textarea"
                                className="form-control"
                                name="detail_Product"
                                value={chi_tiet_san_pham}
                                onChange={(event) => {setChiTietSP(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                            
                            />
                        </div>
                        <div>
                            <NavLink to="/admin/myeditor" className="btn btn-lg btn-info">
                                <input type="text" 
                                        id="input" 
                                        className="form-control"
                                        placeholder="Nhập mô tả....."
                                        onChange={(event) => {setChiTietSP(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                                />
                            </NavLink>
                        </div>
                        
                        <div id="container"></div>
                        <div className="form-group">
                            <label>Trạng Thái: </label>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    name="status_Product" 
                                    value={trang_thai}
                                    onChange={(event) => {setTrangThaiSP(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                                    
                                    checked={trang_thai}  
                                />
                                Còn Hàng
                            </label>
                        </div>
                        <NavLink to="/admin/product" className="btn btn-danger mr-10">
                            Trở Lại
                        </NavLink>
                        <button type="submit" value="Submit" className="btn btn-primary">Lưu Lại</button>
                    </form>
                </div>
            </div>
                





            </Route>
    </div> 
    );
}
export default EditProduct;