
import './Admin.css';
import { NavLink, Route } from 'react-router-dom';
import Product from '../products/Product';
import CreateProduct from '../products/CreateProduct';
import EditProduct from '../products/EditProduct';
import OderProduct from '../products/OderProduct';
import EditOder from '../products/EditOder';
import EditUser from '../products/EditUser';
import User from '../products/User';

function SideBar(){
    return(
        
        <div>
            <Route>
            <NavLink className="navlink" to='/admin/product'>Quản Lý Sản phẩm</NavLink>
            <br/>
            <NavLink className="navlink" to='/admin/orders'>Quản lý Đơn Hàng</NavLink>
            <br/>
            <NavLink className="navlink" to='/admin/user'>Quản Lý Khách Hàng</NavLink>
                


            <Route exact path="/admin/product" component={Product}/>
            <Route exact path="/admin/product/create" component={CreateProduct}/>
            <Route exact  path="/admin/product/edit" component={EditProduct}/>
            <Route exact path="/admin/orders" component={OderProduct}/>
            <Route exact path="/admin/orders/edit" component={EditOder}/>
            
            <Route exact path="/admin/user" component={User}/>
            <Route exact path="/admin/user/edit" component={EditUser}/>
            </Route>
            
        </div>
    );
}

export default SideBar;