import './Home.css';
import { useLocation, Route, NavLink } from 'react-router-dom';
import { getProductByCategory } from '../../services/ProductServices';
import { useState, useEffect } from 'react';
function ListViewMenu(){

    let [productList, setProductList] = useState([]);
   

    //mới đầu thì mấy cái state của product đều rỗng
    // 3

    // lấy value. category bên Menu qua
    let location = useLocation();//là một hook của react router dom
    let category = location.state; //category đây là category đã lấy được từ bên menu qua



    //dùng useEffect để gọi api lấy data qua category vừa lấy được bằng location, 
    // sd useEffect gọi api getProductByCategory
    // useEffect( () => {
    //     getProductByCategory(category).then( //mí cái data này lấy từ csdl
    //         (response) => {
    //             console.log(response);
    //             setProductList(response);

    //         }
    //     );
    // }, [])


    const handleClick = (event) => {
        // event.preventDefault();
        
        console.log(category);
        // let newProduct = {
        //     id: ''
        //     name: ten_san_pham,
        //     price: gia_san_pham,
        //     category: loai_san_pham,
        //     img: img_san_pham,
        //     detail: chi_tiet_san_pham,
        //     status: trang_thai

        // }
        // console.log(newProduct); //product này sẽ gửi qua giỏ hàng đ


        
    }

    return (
        <div>
            <Route>
                <div className="container">
                    <div className="panel panel-info">
                          <div className="panel-heading">
                                <h3 className="panel-title">Danh sách cây</h3>
                          </div>
                          <div className="panel-body">
                                <table className="table table-bordered ">
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
                                        {productList.map((value, index)=>{
                                            return(
                                                <tr key={value.id} >
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
                                                        <button 
                                                            type="button" 
                                                            className="btn btn-success mr-10"
                                                            onClick= {handleClick}
                                                        >
                                                            <NavLink to={{pathname: '/home/cart', state: value.id }}>Thêm vào giỏ hàng</NavLink>
                                                            
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                <NavLink to="/home" className="btn btn-danger mr-10">
                                    Trở Lại
                                </NavLink>  
                          </div>
                    </div>
                </div>
            </Route>
        </div>
    )
}
export default ListViewMenu;