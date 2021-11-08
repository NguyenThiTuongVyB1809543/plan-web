import './Product.css';
import { Route, NavLink} from 'react-router-dom';

function TableViewOrder(props){
    return(
        <div>
            <Route>
                <div>
                    
                    <div className="container" >
                        
                        <div className="row">
                            <div className="col-xs-16 col-sm-16 col-md-16 col-lg-16">
                                
                                <div className="panel panel-primary">
                                      <div className="panel-heading">
                                            <h3 className="panel-title">Quản Lí Đơn Hàng</h3>
                                      </div>
                                      <div className="panel-body">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th className="th_thead">STT</th>
                                                    <th className="th_thead">Mã</th>
                                                    <th className="th_thead">Khách hàng</th>
                                                    <th className="th_thead">Địa Chỉ</th>
                                                    <th className="th_thead">Số điện thoại</th>
                                                    <th className="th_thead">Danh sách cây mua</th>
                                                    <th className="th_thead">Tổng tiền</th>
                                                    <th className="th_thead">Hành động</th>

                                                    

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {props.orderProductList.map( (value, index) =>{
                                                    return (
                                                        <tr key={value.id_don_hang}>
                                                            <td>{value.id_don_hang}</td>
                                                            <td>{value.id_don_hang}</td>
                                                            <td>{value.ten_khach}</td>
                                                            <td>{value.dia_chi_khach}</td>
                                                            <td>{value.so_dien_thoai_khach}</td>
                                                            <td > 
                                                                <center>
                                                                    <table>
                                                                        <thead>
                                                                            <tr >
                                                                                <th >Tên cây</th>
                                                                                <th >Giá</th>
                                                                                <th >Số lượng</th>
                                                                                <th >Tổng </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr >
                                                                                <td className="td">{value.ten_cay}</td>
                                                                                <td className="td">{value.so_luong}</td>
                                                                                <td className="td1">{value.gia_cay}</td>
                                                                                <td className="td">{value.tong_tien_cay}</td>
                                                                            </tr>
                                                                            
                                                                        </tbody>
                                                                    </table>
                                                                </center>
                                                            </td>
                                                            <td>{value.tong_tien}</td>
                                                            <td>
                                                            
                                                                <NavLink
                                                                            to={{pathname: '/admin/orders/edit', state: value.id_don_hang}} // chỗ này được truyền qua EditProduct và được lấy bằng useLocation   
                                                                        >
                                                                            
                                                                            <button type="button" className="btn btn-success mr-10">Sửa</button>
                                                                            
                                                                                
                                                                        </NavLink>
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-danger"
                                                                >
                                                                    Xóa
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                                
                                                
                                                
                                                
                                            </tbody>
                                        </table>
                                      </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    
                    
                    
                   
                </div>
            </Route>
            
            
            
            
        </div>
    );
}

export default TableViewOrder;