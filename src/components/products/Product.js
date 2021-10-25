import { Route, NavLink } from 'react-router-dom'
import TableView from './TableView';
import './Product.css';

function Product(){
    // const history = useHistory(); // use the hook of react router dom to automatically navigate

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
                
                
                {/* <button
                    onClick={() => { history.push('/admin/product/create') }}
                >
                    Thêm
                </button> */}
                <TableView />
                <NavLink to="/admin" className="btn btn-danger mr-10">
                    Trở Lại
                </NavLink>
                </div>

            </Route>
            
        </div>
    )
}

export default Product;