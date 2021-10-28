// trang đăng kí có họ tên, username, password, re_pass, địa chỉ, số điện thoại
import './Home.css';
import {Route, NavLink } from 'react-router-dom';
import React, { useState } from 'react';


function Signup (){
    let [ho_ten, setName] = useState('');
    let [ten_dang_nhap, setUserName] = useState('');
    let [mat_khau, setPass] = useState('');
    let [re_mat_khau, setRePass] = useState('');
    let [dia_chi, setAddress] = useState('');
    let [so_dien_thoai, setNumberPhone] = useState('');
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let product = {
            id: '',
            name: ho_ten,
            username: ten_dang_nhap,
            password: mat_khau,
            re_pass: re_mat_khau,
            address: dia_chi,
            numberPhone: so_dien_thoai

        }
        console.log(product);
        
    }
    return(
        <div>
            <Route>
                
                <div className="container signup_pd70">
                    
                    <div className="panel panel-warning">
                          <div className="panel-heading">
                                <h3 className="panel-title">Đăng Kí</h3>
                          </div>
                        <div className="panel-body">
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Họ Tên: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={ho_ten}
                                            onChange={(event) => {setName(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                            
                                            
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>User name: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            value={ten_dang_nhap}
                                            onChange={(event) => {setUserName(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                            
                                        
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Nhập mật khẩu: </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            value={mat_khau}
                                            onChange={(event) => {setPass(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                            
                                        
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Nhập lại mật khẩu: </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="re_pass"
                                            value={re_mat_khau}
                                            onChange={(event) => {setRePass(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                            
                                        
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Nhập địa chỉ: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="address"
                                            value={dia_chi}
                                            onChange={(event) => {setAddress(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                            
                                        
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Nhập số điện thoại: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="number_phone"
                                            value={so_dien_thoai}
                                            onChange={(event) => {setNumberPhone(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                            
                                        
                                        />
                                    </div>                            
                                    

                                    <NavLink to="/home" className="btn btn-danger mr-10">
                                        Trở Lại
                                    </NavLink>
                                    <button type="submit" value="Submit" className="btn btn-primary">Đăng kí</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
                





            </Route>
    </div> 
    );
}




export default Signup;