
import { Route, NavLink } from 'react-router-dom';
function Menu() {

    



	return (
		<div>
			<Route>
                
                
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr className="DanhMuc">
                            <th className="DanhMuc">Danh Mục Sản Phẩm</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr className="DanhMuc">
                            <td className="DanhMuc">
                                <NavLink to={{pathname: '/home/listview_menu', state: 'lili_water'}}>Bông súng</NavLink>
                            </td>
                        </tr>
                        
                        
                        <tr className="DanhMuc">
                            <td className="DanhMuc">
                                <NavLink to={{pathname: '/home/listview_menu', state: 'hibiscus'}}>Bông bụp</NavLink>
                            </td>
                        </tr>

                        <tr className="DanhMuc">
                            <td className="DanhMuc">
                                <NavLink to={{pathname: '/home/listview_menu', state: 'succulent'}}>Sen đá</NavLink>
                            </td>
                        </tr>
                        <tr className="DanhMuc">
                            <td className="DanhMuc">
                                <NavLink to={{pathname: '/home/listview_menu', state: 'cactus'}}>Xương rồng</NavLink>
                            </td>
                        </tr>
                        {/* <tr className="DanhMuc">
                            <td className="DanhMuc">
                                <NavLink to={{pathname: '/home/listview_menu', state: 'Bông cỏ mĩ'}}>Bông cỏ mĩ</NavLink>
                            </td>
                        </tr> */}
                        

                        
                    </tbody>
                </table>
                
                
                

            </Route>
		</div>
	);
}

export default Menu;