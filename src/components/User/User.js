import { Route, NavLink } from 'react-router-dom'
import TableViewUser from './TableViewUser';
import './User.css';
import { useState, useEffect} from 'react';
import { getAllUser } from '../../services/UserServices';
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

    // const [ userList, setUserList] = useState([]); 
    
    // useEffect( () => { //lấy dữ liệu từ csdl ra
    //     getAllUser().then(
    //         (response) => {
    //             console.log(response);
    //             // setUserList(response.data); //nếu muốn ra name thì response.data.name, nếu muốn ra deatail thì response.data.detail
    //             setUserList(response.data.id);
    //             setUserList(response.data.name_user);
    //             setUserList(response.data.address);
    //             setUserList(response.data.number_phone);
    //         }
    //     );
    // }, userList);





    return(
        <div>
            <Route>
                
                <div className="container">
                    <h1>Quản Lí Khách Hàng</h1>

                    <TableViewUser
                        userList = {userList}//truyền dữ liệu qua bản TableView
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