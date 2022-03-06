import NavBar from './NavBar';
import ListView from './ListView';
import './Home.css';
import Menu from './Menu';
import Footer from './Footer';
import { Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Cart from './Cart';
function Home(){
    return(
        <div>
            <Route>
                <NavBar />
                
                <Menu/>
                <br/>
                <div className="navbar_router">
                    <Route exact path="/home/login" component={Login}/>
                    <Route exact path="/home/signup" component={Signup}/>
                    <Route exact path="/home/cart" component={Cart}/>
                    <br/>
                    <br/>
                    
                </div>

                <ListView />
                <Footer/>

                
            </Route>
            
        </div>
    );
}

export default Home;