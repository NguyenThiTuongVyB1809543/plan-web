import './Product.css';
import { NavLink, Route, useLocation, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getProductById, updateProduct} from '../../services/ProductServices';



function EditProduct() {
    let [name, setTenSP] = useState('');
    let [price, setGiaSP] = useState('');
    let [category, setLoaiSP] = useState('');
    let [img, setImgSP] = useState('');
    let [detail, setChiTietSP] = useState('');
    let [status, setTrangThaiSP] = useState('');
   
    let history = useHistory();

    // lấy value. id bên TableView qua
    let location = useLocation();//là một hook của react router dom
    let productId = location.state; //productId đây là id đã lấy được

    

    //dùng useEffect để gọi api lấy data qua id vừa lấy được bằng location
    // useEffect( () => {
    //     getProductById(productId).then( //mí cái data này lấy từ csdl
    //         (response) => {
    //             console.log(response);
    //             setTenSP (response.data.name);
    //             setGiaSP(response.data.price);
    //             setLoaiSP(response.data.category);
    //             setImgSP(response.data.img);
    //             setChiTietSP(response.data.detail);
    //             setTrangThaiSP(response.data.status);
    //         }
    //     );
    // }, [])




    const handleSubmit = (event) => {
        event.preventDefault();
        let newProduct = {
            id: '',
            name: name,
            price: price,
            category: category,
            img: img,
            detail: detail,
            status: status

        }
        console.log(newProduct);
        console.log(productId);
        //call api cập nhật sản phẩm
        // updateProduct(productId, newProduct).then(
        //     (response) => {
        //         console.log(response);
        //         if(response){
        //             //điều hướng về trang admin/product
        //             history.push('admin/product');
        //         }
        //     }
        // );

        
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
                                value={name}
                                
                                onChange={(event) => {setTenSP(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                            
                            />
                        </div>
                        <div className="form-group">
                            <label>Giá: </label>
                            <input
                                type="number"
                                className="form-control"
                                name="price_Product"
                                value={price}
                                
                                onChange={(event) => {setGiaSP(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                            
                            />
                        </div>
                        <div className="form-group">
                            <label>Thuộc loại: </label>

                            <select className="form-control" name="category_Product" value={category} onChange={(event) => {setLoaiSP(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}>
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
                                value={img}
                                onChange={(event) => {setImgSP(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                
                            
                            />
                        </div>
                        <div className="form-group">
                            <label>Chi Tiết: </label>
                            <input
                                type="textarea"
                                className="form-control"
                                name="detail_Product"
                                value={detail}
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
                                    value={status}
                                    onChange={(event) => {setTrangThaiSP(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                                    
                                    checked={status}  
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