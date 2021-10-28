import './Product.css';
import { NavLink,  Route } from 'react-router-dom';
import React, { useState } from 'react';


function EditUser (){

    let [ten_khach_hang, setName] = useState('');
    let [dia_chi, setAddress] = useState('');
    let [so_dien_thoai, setNumberPhone] = useState('');
   
    const handleSubmit = (event) => {
        event.preventDefault();
        let product = {
            id: '',
            name: ten_khach_hang,
            address: dia_chi,
            numberPhone: so_dien_thoai
        }
        console.log(product);
        
    }

    return(
        <div>
            <Route>
                
                <div className="container">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Tên Khách Hàng: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={ten_khach_hang}
                                    onChange={(event) => {setName(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                                    
                                    
                                />
                            </div>
                            <div className="form-group">
                                <label>Địa chỉ: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={dia_chi}
                                    onChange={(event) => {setAddress(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                                    
                                
                                />
                            </div>
                            
                            
                            <div className="form-group">
                                <label>Số điện thoại: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="number_phone"
                                    value={so_dien_thoai}
                                    onChange={(event) => {setNumberPhone(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                                    
                                
                                />
                            </div>
                            
                            <NavLink to="/admin/user" className="btn btn-danger mr-10">
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

export default EditUser;