import './Product.css';
import { Route, NavLink} from 'react-router-dom';

function TableView(props){
    // console.log(props);
    
    
    return(
        <div>
            
            <Route>
                <div>
                    
                    <div className="container">
                    
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                
                                <div className="panel panel-primary">
                                      <div className="panel-heading">
                                            <h3 className="panel-title">Danh sách cây</h3>
                                      </div>
                                      <div className="panel-body">
                                        <table className="table table-hover">
                                            <thead>
                                                
                                                <tr >
                                                    <th className="th_thead">STT</th>
                                                    <th className="th_thead">Mã</th>
                                                    <th className="th_thead">Tên cây</th>
                                                    <th className="th_thead">Thuộc loại</th>
                                                    <th className="th_thead">Hình Ảnh</th>
                                                    <th className="th_thead">Giá cây</th>
                                                    <th className="th_thead">Mô tả chi tiết</th>
                                                    <th className="th_thead">Tình trạng</th>
                                                    <th className="th_thead">Hành động</th>
                                                    

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {props.productList.map((value, index)=>{
                                                    return(
                                                        <tr key={value.id}>
                                                            <td>{value.id}</td>
                                                            <td>{value.id}</td>
                                                            <td>{value.name}</td>
                                                            <td>{value.category}</td>
                                                            <td><img src={value.img} alt="img_product"/></td>
                                                            <td>{value.price}</td>
                                                            <td>{value.detail}</td>
                                                            <td>
                                                                <span className="label label-warning">{value.status === true ? 'còn hàng' : 'hết hàng'}</span>
                                                                
                                                            </td>
                                                            <td>
                                                                <NavLink
                                                                    to={{pathname: '/admin/product/edit', state: value.id}} // chỗ này được truyền qua EditProduct và được lấy bằng useLocation   
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

export default TableView;