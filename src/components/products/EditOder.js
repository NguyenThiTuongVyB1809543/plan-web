import './Product.css';
import { NavLink, Route } from 'react-router-dom';
import React, { Component } from 'react';


class EditOder extends Component{
    constructor(props) {
        super(props);
        this.state = {
                    id:'',
                    ten_khach_hang: '',//ở những chỗ này sẽ là từ trong cái bản đem ra
                    dia_chi: '',
                    so_dien_thoai: '',
                    ten_cay: '',
                    gia_cay: '',
                    so_luong_cay: '',
                    tong: '',
                    tong_tien: '',
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
        var {ten_khach_hang, dia_chi, so_dien_thoai, ten_cay, gia_cay, so_luong_cay, tong, tong_tien  } = this.state;
        return(
            <div>
                <Route>
                    
                    <div class="container">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Tên khách hàng: </label>
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



                                <div className="form-group">
                                    <label>Tên cây: </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="ten_cay"
                                        value={ten_cay}
                                        onChange={this.handleChange}
                                    
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Giá: </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="gia_cay"
                                        value={gia_cay}
                                        onChange={this.handleChange}
                                    
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Số lượng: </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="so_luong_cay"
                                        value={so_luong_cay}
                                        onChange={this.handleChange}
                                    
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Tổng: </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="tong"
                                        value={tong}
                                        onChange={this.handleChange}
                                    
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Tổng tiền: </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="tong_tien"
                                        value={tong_tien}
                                        onChange={this.handleChange}
                                    
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
}

export default EditOder;