import './User.css';
import { NavLink,  Route, useLocation, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getUserById, updateUser} from '../../services/UserServices';

function EditUser (props){
    console.log(props);
    let [name_user, setName] = useState('');
    let [address, setAddress] = useState('');
    let [number_phone, setNumberPhone] = useState('');
   
    // let history = useHistory();

    //lấy value. id bên TableViewUser qua
    let location = useLocation();//là một hook của react router dom
    let userId = location.state; //userId đây là id đã lấy được từ bên TableViewUser truyền qua



    //dùng useEffect để gọi api lấy data qua id vừa lấy được bằng location(lấy từ csdl)
    // useEffect( () => {
    //     getUserById(userId).then(
    //         (response) => {
    //             console.log(response);
    //             setName (response.data.name_user);
    //             setAddress(response.data.address);
    //             setNumberPhone(response.data.number_phone);
                
    //         }
    //     );
    // }, [])


    const handleSubmit = (event) => {
        event.preventDefault();
        let newUser = {//lấy từ người dùng mới nhập thì có được new user
            id: userId,
            name: name_user,
            address: address,
            numberPhone: number_phone
        }
        console.log(newUser);
        // console.log(userId);
        // //call api cập nhật user
        // updateUser(userId, newUser).then(
        //     (response) => {
        //         console.log(response);
        //         if(response){
        //             //điều hướng về trang admin/product
        //             // history.push('admin/user');
        //         }
        //     }
        // );

        
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
                                    value={name_user}
                                    onChange={(event) => {setName(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                                    
                                    
                                />
                            </div>
                            <div className="form-group">
                                <label>Địa chỉ: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={address}
                                    onChange={(event) => {setAddress(event.target.type === 'checkbox' ? event.target.checked : event.target.value)}}
                                    
                                
                                />
                            </div>
                            
                            
                            <div className="form-group">
                                <label>Số điện thoại: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="number_phone"
                                    value={number_phone}
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