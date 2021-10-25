import logo_gmail from './img/logo_gmail.PNG';

function Footer() {
	return (
		<div>
		
            <center>     
                <table className="center_table">
                    <tbody>
                        <tr>
                            <td className="table_footer">Địa chỉ liên hệ</td>
                            <td className="table_footer">Thông tin bản quyền website</td>
                            <td className="table_footer">Link liên kết các trang mạng xã hội</td>
                            <td className="table_footer">vsdgabfdnsrtjgnfhsjksfnmfgm</td>
                        </tr>

                        <tr>
                            <td className="table_footer">Kí Túc Xá Khu B, Đại Học Cần Thơ</td>
                            <td className="table_footer">@Copyright by Di</td>
                            <td className="table_footer"><img src={logo_gmail}/></td>
                            <td className="table_footer">ngfndgn</td>
                        </tr>
                    </tbody>
                </table>
            </center>
            
            
		</div>
	);
}

export default Footer;