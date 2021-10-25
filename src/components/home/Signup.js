// trang đăng kí có họ tên, username, password, re_pass, địa chỉ, số điện thoại
import './Home.css';
import {Route, NavLink } from 'react-router-dom';
import React, { Component } from 'react';


class Signup extends Component{
    constructor(props) {
        super(props);
        this.state = {
                    id:'',
                    ho_ten: '',
                    username: '',
                    password: '',
                    re_pass: '',
                    dia_chi: '',
                    so_dien_thoai: ''
                    };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
      
    handleChange(event) {
        var  target = event.target;
        var  name = target.name;
        var  value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        }

        );


    }


    
    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        var {ho_ten, username, password, re_pass, dia_chi, so_dien_thoai  } = this.state;
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
                                    
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label>Họ Tên: </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="ho_ten"
                                                value={ho_ten}
                                                onChange={this.handleChange}
                                                
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>User name: </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="username"
                                                value={username}
                                                onChange={this.handleChange}
                                            
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Nhập mật khẩu: </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                value={password}
                                                onChange={this.handleChange}
                                            
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Nhập lại mật khẩu: </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="re_pass"
                                                value={re_pass}
                                                onChange={this.handleChange}
                                            
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Nhập địa chỉ: </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="dia_chi"
                                                value={dia_chi}
                                                onChange={this.handleChange}
                                            
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Nhập số điện thoại: </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="so_dien_thoai"
                                                value={so_dien_thoai}
                                                onChange={this.handleChange}
                                            
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
}




export default Signup;