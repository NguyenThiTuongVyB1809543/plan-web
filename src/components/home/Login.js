// trang đăng nhập có username, password
import './Home.css';
import {Route, NavLink } from 'react-router-dom';
import React, { useState } from 'react';


function Login(){

    let [ten_dang_nhap, setName] = useState('');
    let [mat_khau, setPass] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let product = {
            id: '',
            username: ten_dang_nhap,
            password: mat_khau
        }
        console.log(product);
        
    }
    return(
        <div>
            <Route>
                
                <div class="container login_pd70" >
                    
                    <div class="panel panel-warning">
                          <div class="panel-heading">
                                <h3 class="panel-title">Đăng Nhập</h3>
                          </div>
                          <div class="panel-body">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Nhập Username: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            value={ten_dang_nhap}
                                            onChange={(event) => {setName(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                            
                                            
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Nhập mật khẩu: </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="pass"
                                            value={mat_khau}
                                            onChange={(event) => {setPass(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                            
                                        
                                        />
                                    </div>
                                    
                                    <NavLink to="/home" className="btn btn-danger mr-10">
                                        Trở Lại
                                    </NavLink>
                                    <button type="submit" value="Submit" className="btn btn-primary">Đăng nhập</button>
                                </form>
                            </div>
                          </div>
                    </div>
                    
                </div>
                





            </Route>
    </div> 
    );
}




export default Login;