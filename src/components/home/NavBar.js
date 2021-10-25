import './Home.css';
import { Route, NavLink } from 'react-router-dom';
import Search from './Search';

function NavBar(){
    
    return(
        <div>
            
            <Route>
                <center>
                <div className="navbar">
                    <a className="navbar-brand">Di's Graden</a>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            {/* <a href="#">Home</a> */}
                            <NavLink to="/home">Trang Chủ</NavLink>
                        </li>
                        
                        
                        <li>
                            <NavLink to="/home/login">Đăng Nhập</NavLink>
                        </li>
                        <li>
                            {/* <a href="#">Admin</a> */}
                            <NavLink to="/home/signup">Đăng Ký</NavLink>
                        </li>
                        <li>
                            {/* <a href="#">Admin</a> */}
                            <NavLink to="/home/cart">Giỏ Hàng</NavLink>
                        </li>
                        <li>
                            <Search/>
                        </li>
                    </ul>
                </div>

                
                </center>
            </Route>



            

            
            
        </div>
    );
}

export default NavBar;