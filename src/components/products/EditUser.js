import './Product.css';
import { NavLink,  Route } from 'react-router-dom';
import React, { Component } from 'react';


class EditUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
                    id:'',
                    ten_khach_hang: '',//ở những chỗ này sẽ là từ trong cái bản đem ra
                    dia_chi: '',
                    so_dien_thoai: '',
                    
                    };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
      
    handleChange(event) {
        
        // console.log(event.target.value);
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
        var {ten_khach_hang, dia_chi, so_dien_thoai } = this.state;
        return(
            <div>
                <Route>
                    
                    <div className="container">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Tên Khách Hàng: </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="ten_khach_hang"
                                        value={ten_khach_hang}
                                        onChange={this.handleChange}
                                        
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ: </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="dia_chi"
                                        value={dia_chi}
                                        onChange={this.handleChange}
                                    
                                    />
                                </div>
                                
                                
                                <div className="form-group">
                                    <label>Số điện thoại: </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="so_dien_thoai"
                                        value={so_dien_thoai}
                                        onChange={this.handleChange}
                                    
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
}

export default EditUser;