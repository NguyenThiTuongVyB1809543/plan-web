function Login() {
    return (
        <div>
            <title>Login V9</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/*===============================================================================================*/}
            <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
            {/*===============================================================================================*/}
            <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css" />
            {/*===============================================================================================*/}
            <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
            {/*===============================================================================================*/}
            <link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css" />
            {/*===============================================================================================*/}
            <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css" />
            {/*===============================================================================================*/}
            <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css" />
            {/*===============================================================================================*/}
            <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css" />
            {/*===============================================================================================*/}
            <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css" />
            {/*===============================================================================================*/}
            <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css" />
            {/*//đã copy thư mục vendor ===============================================================================================*/}
            <link rel="stylesheet" type="text/css" href="css/util.css" />
            <link rel="stylesheet" type="text/css" href="css/main.css" />
            {/*===============================================================================================*/}
            <div className="container-login100" style={{ backgroundImage: 'url("images/bg-01.jpg")' }}>
                <div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
                    <form className="login100-form validate-form">
                        <span className="login100-form-title p-b-37">
                            Sign In
                  </span>
                        <div className="wrap-input100 validate-input m-b-20" data-validate="Enter username or email">
                            <input className="input100" type="text" name="username" placeholder="username or email" />
                            <span className="focus-input100" />
                        </div>
                        <div className="wrap-input100 validate-input m-b-25" data-validate="Enter password">
                            <input className="input100" type="password" name="pass" placeholder="password" />
                            <span className="focus-input100" />
                        </div>
                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                Sign In
                    </button>
                        </div>
                        <div className="text-center p-t-57 p-b-20">
                            <span className="txt1">
                                Or login with
                    </span>
                        </div>
                        <div className="flex-c p-b-112">
                            <a  className="login100-social-item">
                                <i className="fa fa-facebook-f" />
                            </a>
                            <a

                         className="login100-social-item">
                                <img src="images/icons/icon-google.png" alt="GOOGLE" />
                            </a>
                        </div>
                        <div className="text-center">
                            <a  className="txt2 hov1">
                                Sign Up
                    </a>
                        </div>
                    </form>
                </div>
            </div>
            <div id="dropDownSelect1" />
            {/*===============================================================================================*/}
            {/*===============================================================================================*/}
            {/*===============================================================================================*/}
            {/*===============================================================================================*/}
            {/*===============================================================================================*/}
            {/*===============================================================================================*/}
            {/*===============================================================================================*/}
        </div>


    );
}
export default Login;

