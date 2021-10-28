import { Route, NavLink } from 'react-router-dom'
import TableView from './TableView';
import './Product.css';

function Product(){
    // const history = useHistory(); // use the hook of react router dom to automatically navigate
    let ProductList =  [
        {
            id: '0',
            name: 'Bong bup',
            price: 30000,
            kind: 'castus',
            img: 'img_san_pham',
            detail: 'bong bup som no chieu tan',
            status: true
        },
        {
            id: '1',
            name: 'Bong bup',
            price: 40000,
            kind: 'castus',
            img: 'img_san_pham',
            detail: 'bong bup som no chieu tan',
            status: false
        }
    ];
    
    
    
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