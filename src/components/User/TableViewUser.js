import './User.css';
import { Route, NavLink} from 'react-router-dom';
function TableViewUser(props){
    console.log(props);
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
                            {props.userList.map((value, index) => {
                                return (
                                    <tr key = {value.id}>
                                        <td>1</td>
                                        <td>{value.id}</td>
                                        <td>{value.name_user}</td>
                                        <td>{value.address}</td>
                                        <td>{value.number_phone}</td>
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
                                )
                            })}
                            
                            
                            
                        </tbody>
                    </table>
                    
                   
                </div>
            </Route>
            
            
            
            
        </div>
    );
}

export default TableViewUser;