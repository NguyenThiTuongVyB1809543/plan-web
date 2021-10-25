import { Route, NavLink } from 'react-router-dom'
import TableViewUser from './TableViewUser';
import './Product.css';

function User(){
    // const history = useHistory(); // use the hook of react router dom to automatically navigate

    return(
        <div>
            <Route>
                
                <div className="container">
                    <h1>Quản Lí Khách Hàng</h1>

                    <TableViewUser/>
                    <NavLink to="/admin" className="btn btn-danger mr-10">
                        Trở Lại
                    </NavLink>
                </div>
                
              
                
            </Route>
            
        </div>
    )
}

export default User;