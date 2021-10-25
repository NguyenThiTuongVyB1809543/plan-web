import './Product.css';
import { Route, NavLink} from 'react-router-dom';

function TableView(){
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
                                                <tr>
                                                    <td>1</td>
                                                    <td>01</td>
                                                    <td>Nguyễn Văn A</td>
                                                    <td>khu vực bắc vàng phường thới long quận ô môn thành phố cần thơ</td>
                                                    <td>09 07080906</td>
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
                                                                        <td className="td">Bông vạn thọ</td>
                                                                        <td className="td">50000</td>
                                                                        <td className="td1">2</td>
                                                                        <td className="td">lấy giá nhân số lượng</td>
                                                                    </tr>
                                                                    <tr >
                                                                        <td className="td">Bông bụp</td>
                                                                        <td className="td">30000</td>
                                                                        <td className="td1">3</td>
                                                                        <td className="td">lấy giá nhân số lượng</td>
                                                                    </tr>
                                                                    <tr >
                                                                        <td className="td">Bông giấy</td>
                                                                        <td className="td">40000</td>
                                                                        <td className="td1">5</td>
                                                                        <td className="td">lấy giá nhân số lượng</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </center>
                                                    </td>
                                                    <td>lấy tổng của mấy con kia cộng lại</td>
                                                    <td>
                                                        <NavLink
                                                            to="/admin/orders/edit"
                                                            className="btn btn-success mr-10"
                                                        >
                                                                Sửa
                                                        </NavLink>
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger"
                                                        >
                                                            Xóa
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>01</td>
                                                    <td>Nguyễn Văn A</td>
                                                    <td>khu vực bắc vàng phường thới long quận ô môn thành phố cần thơ</td>
                                                    <td>09 07080906</td>
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
                                                                        <td className="td">Bông vạn thọ</td>
                                                                        <td className="td">50000</td>
                                                                        <td className="td1">2</td>
                                                                        <td className="td">lấy giá nhân số lượng</td>
                                                                    </tr>
                                                                    <tr >
                                                                        <td className="td">Bông bụp</td>
                                                                        <td className="td">30000</td>
                                                                        <td className="td1">3</td>
                                                                        <td className="td">lấy giá nhân số lượng</td>
                                                                    </tr>
                                                                    <tr >
                                                                        <td className="td">Bông giấy</td>
                                                                        <td className="td">40000</td>
                                                                        <td className="td1">5</td>
                                                                        <td className="td">lấy giá nhân số lượng</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </center>
                                                    </td>
                                                    <td>lấy tổng của mấy con kia cộng lại</td>
                                                    <td>
                                                        <NavLink
                                                            to="/admin/orders/edit"
                                                            className="btn btn-success mr-10"
                                                        >
                                                                Sửa
                                                        </NavLink>
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger"
                                                        >
                                                            Xóa
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>01</td>
                                                    <td>Nguyễn Văn A</td>
                                                    <td>khu vực bắc vàng phường thới long quận ô môn thành phố cần thơ</td>
                                                    <td>09 07080906</td>
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
                                                                        <td className="td">Bông vạn thọ</td>
                                                                        <td className="td">50000</td>
                                                                        <td className="td1">2</td>
                                                                        <td className="td">lấy giá nhân số lượng</td>
                                                                    </tr>
                                                                    <tr >
                                                                        <td className="td">Bông bụp</td>
                                                                        <td className="td">30000</td>
                                                                        <td className="td1">3</td>
                                                                        <td className="td">lấy giá nhân số lượng</td>
                                                                    </tr>
                                                                    <tr >
                                                                        <td className="td">Bông giấy</td>
                                                                        <td className="td">40000</td>
                                                                        <td className="td1">5</td>
                                                                        <td className="td">lấy giá nhân số lượng</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </center>
                                                    </td>
                                                    <td>lấy tổng của mấy con kia cộng lại</td>
                                                    <td>
                                                        <NavLink
                                                            to="/admin/orders/edit"
                                                            className="btn btn-success mr-10"
                                                        >
                                                                Sửa
                                                        </NavLink>
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger"
                                                        >
                                                            Xóa
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>01</td>
                                                    <td>Nguyễn Văn A</td>
                                                    <td>khu vực bắc vàng phường thới long quận ô môn thành phố cần thơ</td>
                                                    <td>09 07080906</td>
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
                                                                        <td className="td">Bông vạn thọ</td>
                                                                        <td className="td">50000</td>
                                                                        <td className="td1">2</td>
                                                                        <td className="td">lấy giá nhân số lượng</td>
                                                                    </tr>
                                                                    <tr >
                                                                        <td className="td">Bông bụp</td>
                                                                        <td className="td">30000</td>
                                                                        <td className="td1">3</td>
                                                                        <td className="td">lấy giá nhân số lượng</td>
                                                                    </tr>
                                                                    <tr >
                                                                        <td className="td">Bông giấy</td>
                                                                        <td className="td">40000</td>
                                                                        <td className="td1">5</td>
                                                                        <td className="td">lấy giá nhân số lượng</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </center>
                                                    </td>
                                                    <td>lấy tổng của mấy con kia cộng lại</td>
                                                    <td>
                                                        <NavLink
                                                            to="/admin/orders/edit"
                                                            className="btn btn-success mr-10"
                                                        >
                                                                Sửa
                                                        </NavLink>
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger"
                                                        >
                                                            Xóa
                                                        </button>
                                                    </td>
                                                </tr>
                                                
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

export default TableView;