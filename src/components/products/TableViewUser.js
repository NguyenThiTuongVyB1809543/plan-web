import './Product.css';
import { Route, NavLink} from 'react-router-dom';
function TableViewUser(){
    return(
        <div>
            <Route>
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th className="th_thead">STT</th>
                                <th className="th_thead">Mã</th>
                                <th className="th_thead">Tên khách hàng</th>
                                <th className="th_thead">Địa Chỉ</th>
                                <th className="th_thead">Số điện thoại</th>
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
                                <td>
                                    <NavLink
                                        to="/admin/user/edit"
                                        className="btn btn-success mr-10"
                                    >
                                            Sửa
                                    </NavLink >
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
                                <td>
                                    <NavLink
                                        to="/admin/user/edit"
                                        className="btn btn-success mr-10"
                                    >
                                            Sửa
                                    </NavLink >
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
                                <td>
                                    <NavLink
                                        to="/admin/user/edit"
                                        className="btn btn-success mr-10"
                                    >
                                            Sửa
                                    </NavLink >
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
                                <td>
                                    <NavLink
                                        to="/admin/user/edit"
                                        className="btn btn-success mr-10"
                                    >
                                            Sửa
                                    </NavLink >
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
            </Route>
            
            
            
            
        </div>
    );
}

export default TableViewUser;