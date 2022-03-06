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
                {/* <CreateProduct /> */}
                {/* <Product/> */}
            </Route>

       

            
        </div>
    );
}

export default Admin;