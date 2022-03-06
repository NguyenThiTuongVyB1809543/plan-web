import './Admin.css';
import { Route } from 'react-router-dom';
// import Admin from './Admin';
// import logo_di from '../../../public/images/logo_di.png';
function NavBar(){
    return(
        <div>
            <Route>

                
                <nav className="navbar navbar-inverse">
                    <a className="navbar-brand"><img src="/images/logo_di.png" className="img" alt="Image"/></a>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="/home">Trang Chủ</a>
                            {/* <Route exact path="/home" component={Admin}/> */}
                        </li>
                        <li>
                            <a href="/#">Link</a>
                        </li>
                    </ul>
                </nav>
                


                

            </Route>
            
        </div>
    );
}

export default NavBar;