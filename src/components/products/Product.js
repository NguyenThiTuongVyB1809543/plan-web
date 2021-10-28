import { Route, NavLink } from 'react-router-dom'
import TableView from './TableView';
import './Product.css';
import hoa_dam_bup from './img_product/hoa_dam_bup.png';
import hoa_dam_bup_1 from './img_product/hoa_dam_bup_1.png';
import hoa_dam_bup_2 from './img_product/hoa_dam_bup_2.png';
import { useState, useEffect} from 'react';
import {getAllProduct} from '../../services/ProductServices';


function Product(){
    // const history = useHistory(); // use the hook of react router dom to automatically navigate
    let ProductList =  [
        {
            id: '0',
            name: 'Bong bup',
            price: 30000,
            kind: 'cactus',
            img: hoa_dam_bup,
            detail: 'bong bup som no chieu tan',
            status: true
        },
        {
            id: '1',
            name: 'Bong bup trang',
            price: 40000,
            kind: 'hibicus',
            img: hoa_dam_bup_1,
            detail: 'bong bup som no chieu tan',
            status: true
        },
        {
            id: '2',
            name: 'Bong bup trang',
            price: 50000,
            kind: 'lili_water',
            img: hoa_dam_bup_2,
            detail: 'bong bup som no chieu tan',
            status: false
        }
    ];
    

    // const [ ProductList, setProductList] = useState([]); 
    
    // useEffect( () => {
    //     getAllProduct().then(
    //         (response) => {
    //             console.log(response);
    //             setProductList(response.data); //nếu muốn ra name thì response.data.name, nếu muốn ra deatail thì response.data.detail
    //         }
    //     );
    // }, ProductList);

    
    
    return(
        <div>
            <Route>
            
                
                <div class="container">
                    <h2>Quản Lí Sản Phẩm</h2>
                    
                    <NavLink to="/admin/product/create">
                        <button type="button" class="btn btn-primary">Thêm Cây</button>
                    </NavLink>                   
                
                
                
                
                <br/>
                <br/>
                
                
                
                <TableView 
                    productList = {ProductList}
                    
                />
                {/* <button
                    onClick = {() => {console.log(ProductList)}}
                >
                    log ra productList
                </button> */}
                <NavLink to="/admin" className="btn btn-danger mr-10">
                    Trở Lại
                </NavLink>
                </div>

            </Route>
            
        </div>
    )
}

export default Product;