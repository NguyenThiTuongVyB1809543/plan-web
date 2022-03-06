import './Home.css';
import { Route, NavLink} from 'react-router-dom';
import { getAllProduct } from '../../services/ProductServices';
import { useState, useEffect} from 'react';
function ListView(){
    //lấy tất cả product ra đây
    const [ ProductList, setProductList] = useState([]); 
    // let [name, setTenSP] = useState('');
    // let [price, setGiaSP] = useState('');
    // let [category, setLoaiSP] = useState('');
    // let [img, setImgSP] = useState('');
    // let [detail, setChiTietSP] = useState('');
    // let [status, setTrangThaiSP] = useState('');
    useEffect( () => {
        getAllProduct().then(
            (response) => {
                console.log(response);
                setProductList(response.data); //nếu muốn ra name thì response.data.name, nếu muốn ra deatail thì response.data.detail
                // setTenSP (response.data.name);
                // setGiaSP(response.data.price);
                // setLoaiSP(response.data.category);
                // setImgSP(response.data.img);
                // setChiTietSP(response.data.detail);
                // setTrangThaiSP(response.data.status);
            
            }
        );
    }, ProductList);

    return(
        <div>
           <Route>
                <center>
                        
                        <div className="container">
                            {ProductList.map((value, index)=>{
                                return(
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                            <div className="thumbnail">
                                                <img src={value.img} alt="img_product"/>
                                                <div className="caption">
                                                    <h3>{value.name}</h3>
                                                    <p>
                                                        {value.detail}
                                                    </p>
                                                    <p>
                                                        <a href="/home/crt" className="btn btn-primary">Thêm vào giỏ hàng</a>
                                                        <NavLink
                                                            to={{pathname: '/home/cart', state: value.id}} // chỗ này được truyền qua cart và được lấy bằng useLocation   
                                                        ></NavLink>
                                                        <a href="/#" className="btn btn-default">Chi Tiết</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                )
                            })}
                            
                        
                            
                        </div>
                        
                        
                    </center>
           </Route>
            
            
        </div>
    );
}

export default ListView;