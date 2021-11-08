import './App.css';
import Home from './components/home/Home';
import Admin from './components/admin/Admin';
import { Switch, Route } from 'react-router-dom';
import Login from './components/home/Login';
import Signup from './components/home/Signup';
import Cart from './components/home/Cart';
import Product from './components/products/Product';
import CreateProduct from './components/products/CreateProduct';
import EditProduct from './components/products/EditProduct';
import OrderProduct from './components/products/OrderProduct';
import EditOrder from './components/products/EditOrder';
import User from './components/user/User';
import EditUser from './components/user/EditUser';
import MyEditor from './components/text_editor/MyEditor';
import ListViewMenu from './components/home/ListViewMenu';

function App() {
	return (
		<Switch>
			<Route 
				exact path="/home" component={Home}
			/>
			<Route 
				 path="/home/login" component={Login}
			/>
			<Route 
				 path="/home/signup" component={Signup}
			/>
			<Route  path="/home/cart" component={Cart}/>
			<Route  path="/home/listview_menu" component={ListViewMenu}/>




			<Route 
				exact path="/admin" component={Admin}
			/>
			<Route exact path="/admin/product" component={Product}/>
			<Route exact path="/admin/product/create" component={CreateProduct}/>
			<Route exact  path="/admin/product/edit" component={EditProduct}/>
			<Route exact path="/admin/orders" component={OrderProduct}/>
			<Route exact path="/admin/orders/edit" component={EditOrder}/>
			<Route exact path="/admin/user" component={User}/>
			<Route exact path="/admin/user/edit" component={EditUser}/>
			<Route exact path="/admin/myeditor" component={MyEditor}/>
		</Switch>
		
		// <div>
		// 	<Admin/>
		// </div>
		
	);
}

export default App;