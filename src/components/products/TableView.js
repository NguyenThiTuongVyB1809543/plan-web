import './Product.css';
import { Route, NavLink} from 'react-router-dom';
import hoa_dam_bup from './img_product/hoa_dam_bup.png';
import hoa_dam_bup_1 from './img_product/hoa_dam_bup_1.png';
import hoa_dam_bup_2 from './img_product/hoa_dam_bup_2.png';
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
                                                {props.map((value, index)=>{
                                                    return(
                                                        <tr key={value.id}>
                                                            <td>1</td>
                                                            <td>{value.id}</td>
                                                            <td>{value.name}</td>
                                                            <td>{value.name}</td>
                                                            <td><img src={hoa_dam_bup} alt="bongbup"/></td>
                                                            <td>{value.name}</td>
                                                            <td>{value.name}</td>
                                                            <td>
                                                                <span className="label label-warning">{value.name}</span>
        
                                                            </td>
                                                            <td>
                                                                <NavLink
                                                                    to="/admin/product/edit"
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
                                                    )
                                                })}
                                                {/* <tr>
                                                    <td>1</td>
                                                    <td>01</td>
                                                    <td>{props.name}</td>
                                                    <td>Cây cảnh khác</td>
                                                    <td><img src={hoa_dam_bup} alt="bongbup"/></td>
                                                    <td>{props.price}</td>
                                                    <td>Bông bụp là bongo bụp á</td>
                                                    <td>
                                                        <span className="label label-warning">Còn Hàng</span>

                                                    </td>
                                                    <td>
                                                        <NavLink
                                                            to="/admin/product/edit"
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
                                                </tr> */}
                                                <tr>
                                                    <td>1</td>
                                                    <td>01</td>
                                                    <td>bông bụp</td>
                                                    <td>Cây cảnh khác</td>
                                                    <td><img src={hoa_dam_bup_1} alt="bongbup"/></td>
                                                    <td>50.000</td>
                                                    <td>Bông bụp là bongo bụp á</td>
                                                    <td>
                                                        <span className="label label-warning">Còn Hàng</span>

                                                    </td>
                                                    <td>
                                                        <NavLink
                                                            to="/admin/product/edit"
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
                                                    <td>bông bụp</td>
                                                    <td>Cây cảnh khác</td>
                                                    <td><img src={hoa_dam_bup_2} alt="bongbup"/></td>
                                                    <td>50.000</td>
                                                    <td>Bông bụp là bongo bụp á</td>
                                                    <td>
                                                        
                                                        <span className="label label-warning">Còn Hàng</span>
                                                        

                                                    </td>
                                                    <td>
                                                        <NavLink
                                                            to="/admin/product/edit"
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