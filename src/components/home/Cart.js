import { Route, NavLink } from 'react-router-dom';


function Cart() {
	return (
		<div>
			<Route>
				<h1>Giỏ Hàng</h1>
                
                
                <div className="container">
                    <table>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr className="tr_B">
                                        <td className="td_cart">STT</td>
                                        <td className="td_cart">Hình Ảnh</td>
                                        <td className="td_cart">Tên Cây</td>
                                        <td className="td_cart">Số Lượng</td>
                                        <td className="td_cart">Đơn Giá</td>
                                        <td className="td_cart">Thành Tiền</td>
                                        <td className="td_cart">Hành Động</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>vsfdahfdg</td>
                                        <td>ngjgjng</td>
                                        <td>ngjgfmhgd</td>
                                        <td>vsfdahfdg</td>
                                        <td>ngjgjng</td>
                                        <td>ngjgfmhgd</td>
                                        <td>ngjgfmhgd</td>
                                    </tr>
                                    <tr>
                                    <td>vsfdahfdg</td>
                                        <td>ngjgjng</td>
                                        <td>ngjgfmhgd</td>
                                        <td>vsfdahfdg</td>
                                        <td>ngjgjng</td>
                                        <td>ngjgfmhgd</td>
                                        <td>ngjgfmhgd</td>
                                    </tr>
                                    <tr>
                                        <td>vsfdahfdg</td>
                                        <td>ngjgjng</td>
                                        <td>ngjgfmhgd</td>
                                        <td>vsfdahfdg</td>
                                        <td>ngjgjng</td>
                                        <td>ngjgfmhgd</td>
                                        <td>ngjgfmhgd</td>  
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </table>

                    <NavLink to="/home" className="btn btn-danger mr-10">
                        Trở Lại
                    </NavLink>
                </div>
                
                

                
			</Route>
			
		</div>
	);
}

export default Cart;