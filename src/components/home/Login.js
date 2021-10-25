// trang đăng nhập có username, password
import './Home.css';
import {Route, NavLink } from 'react-router-dom';
import React, { Component } from 'react';


class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
                    id:'',
                    username: '',
                    pass: '',
                    
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
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        var {username, pass} = this.state;
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
                
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label>Nhập Username: </label>
                                            <input
                                                type="text"
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
                                                name="pass"
                                                value={pass}
                                                onChange={this.handleChange}
                                            
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
}




export default Login;