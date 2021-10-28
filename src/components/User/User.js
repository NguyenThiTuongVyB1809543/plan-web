import { Route, NavLink } from 'react-router-dom'
import TableViewUser from './TableViewUser';
import './User.css';

function User(){
    // const history = useHistory(); // use the hook of react router dom to automatically navigate
    let userList = [
        {
            id: '0',
            name_user: 'Nguyen Van A',
            address: 'so 35, duong 1b, phuong 7, quan cam, tp sai gon ',
            number_phone: '0700253456'
        },
        {
            id: '1',
            name_user: 'Nguyen Van B',
            address: 'so 35, duong 2a, phuong 9, quan cam, tp sai gon ',
            number_phone: '070025759'
        },
        {
            id: '2',
            name_user: 'Nguyen Van C',
            address: 'so 35, duong 34, phuong 7, quan cam, tp sai gon ',
            number_phone: '070789435'
        },
    ];
    return(
        <div>
            <Route>
                
                <div className="container">
                    <h1>Quản Lí Khách Hàng</h1>

                    <TableViewUser
                        userList = {userList}
                    />
                    <NavLink to="/admin" className="btn btn-danger mr-10">
                        Trở Lại
                    </NavLink>
                </div>
                
              
                
            </Route>
            
        </div>
    )
}

export default User;