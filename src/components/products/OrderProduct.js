import { Route, NavLink, useHistory } from 'react-router-dom'
import TableViewOrder from './TableViewOrder';
import './Product.css';
import { getAllOrder } from '../../services/OrderServices';
import { useEffect, useState } from 'react';
function OrderProduct(){
    // const history = useHistory(); // use the hook of react router dom to automatically navigate
    let orderProductList = [
        {
            id_don_hang: '0',
            ten_khach: 'Nguyễn Văn A',
            dia_chi_khach: 'khu vực bắc vàng phường thới long quận ô môn thành phố cần thơ',
            so_dien_thoai_khach: '09 07080906',
            ten_cay: 'Bông vạn thọ đỏ',
            gia_cay: 50000,
            so_luong: 9,
            tong_tien_cay: 45685000,
            tong_tien: 420000
        },

        {
            id_don_hang: '1',
            ten_khach: 'Nguyễn Văn B',
            dia_chi_khach: 'khu vực bắc vàng phường thới long quận ô môn thành phố cần thơ',
            so_dien_thoai_khach: '09 07080906',
            ten_cay: 'Bông vạn thọ trắng',
            gia_cay: 50000,
            so_luong: 9,
            tong_tien_cay: 45685000,
            tong_tien: 420000
        },
        {
            id_don_hang: '2',
            ten_khach: 'Nguyễn Văn C',
            dia_chi_khach: 'khu vực bắc vàng phường thới long quận ô môn thành phố cần thơ',
            so_dien_thoai_khach: '09 07080906',
            ten_cay: 'Bông vạn thọ vàng',
            gia_cay: 50000,
            so_luong: 9,
            tong_tien_cay: 45685000,
            tong_tien: 420000
        }
    ];




    // const [ orderProductList, setOrderProductList] = useState([]); 
    
    // useEffect( () => {
    //     getAllOrder().then(
    //         (response) => {
    //             console.log(response);
    //             setOrderProductList(response.data); //nếu muốn ra name thì response.data.name, nếu muốn ra deatail thì response.data.detail
    //         }
    //     );
    // }, orderProductList);
    return(
        <div>
            <Route>
                
                <div className="container">
                    <br/>
                    <TableViewOder
                        orderProductList = {orderProductList}
                    />
                    <NavLink to="/admin" className="btn btn-danger mr-10">
                        Trở Lại
                    </NavLink>
                </div>
                
              
                
            </Route>
            
        </div>
    )
}

export default OrderProduct;