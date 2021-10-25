import './Admin.css';
import NavBar from './NavBar';
import SideBar from './SideBar';
// import Product from '../products/Product';
// import CreateProduct from '../products/CreateProduct';
// import EditProduct from '../products/EditProduct';
import { Route} from 'react-router-dom'

function Admin(){
    return(
        <div>
            <Route>
                <NavBar />
                <br/>
                <br/>
                <br/>
                <br/>
                <SideBar />
                {/* <EditProduct/> */}
                
                {/* <div className="content-containter">
                    <Switch>
                        <Route exact path='/admin/product'  component={Product}/>
                        <Route path='/admin/product/create' component={CreateProduct}/>
                        <Route path='admin/product/edit' component={EditProduct}/>
                    </Switch>
                </div> */}

                {/* <CreateProduct /> */}
                {/* <Product/> */}
            </Route>

       

            
        </div>
    );
}

export default Admin;