import './Product.css';
import { NavLink, Route } from 'react-router-dom';
import React, { useState } from 'react';


function EditOder() {
    let [ten_khach_hang, setNameGest] = useState('');
    let [dia_chi, setAddress] = useState('');
    let [so_dien_thoai, setNumberPhone] = useState('');
    let [ten_cay, setNamePlant] = useState('');
    let [gia_cay, setPricePlant] = useState('');
    
    let [so_luong_cay, setNumberPlant] = useState('');
    let [tong, setSumMoneyPlant] = useState('');
    let [tong_tien, setSum] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        let product = {
            id: '',
            name_gest: ten_khach_hang,
            address_gest: dia_chi,
            number_phone_gest: so_dien_thoai,
            name_plant: ten_cay,
            price_plant: gia_cay,
            number_plant: so_luong_cay,
            sum_money_plant: tong,
            sum:tong_tien
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
                                <label>Tên khách hàng: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name_gest"
                                    value={ten_khach_hang}
                                    onChange={(event) => {setNameGest(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                                    
                                />
                            </div>
                            <div className="form-group">
                                <label>Địa chỉ: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address_gest"
                                    value={dia_chi}
                                    onChange={(event) => {setAddress(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                                
                                />
                            </div>
                            
                            <div className="form-group">
                                <label>Số điện thoại: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="number_phone_gest"
                                    value={so_dien_thoai}
                                    onChange={(event) => {setNumberPhone(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                                
                                />
                            </div>



                            <div className="form-group">
                                <label>Tên cây: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name_plant"
                                    value={ten_cay}
                                    onChange={(event) => {setNamePlant(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                                
                                />
                            </div>
                            <div className="form-group">
                                <label>Giá: </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="price_plant"
                                    value={gia_cay}
                                    onChange={(event) => {setPricePlant(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                                
                                />
                            </div>
                            <div className="form-group">
                                <label>Số lượng: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="number_plant"
                                    value={so_luong_cay}
                                    onChange={(event) => {setNumberPlant(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                                
                                />
                            </div>
                            <div className="form-group">
                                <label>Tổng: </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="sum_money_plant"
                                    value={tong}
                                    onChange={(event) => {setSumMoneyPlant(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                                
                                />
                            </div>
                            <div className="form-group">
                                <label>Tổng tiền: </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="sum_money"
                                    value={tong_tien}
                                    onChange={(event) => {setSum(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                                
                                />
                            </div>
                            <NavLink to="/admin/orders" className="btn btn-danger mr-10">
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

export default EditOder;