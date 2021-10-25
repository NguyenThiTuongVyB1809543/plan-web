import { Route, NavLink } from 'react-router-dom'
import TableViewOder from './TableViewOder';
import './Product.css';

function OderProduct(){
    // const history = useHistory(); // use the hook of react router dom to automatically navigate

    return(
        <div>
            <Route>
                
                <div className="container">
                    <br/>
                    <TableViewOder/>
                    <NavLink to="/admin" className="btn btn-danger mr-10">
                        Trở Lại
                    </NavLink>
                </div>
                
              
                
            </Route>
            
        </div>
    )
}

export default OderProduct;