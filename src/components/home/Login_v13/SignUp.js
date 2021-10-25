import React, { Component } from 'react';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            username: '',
            pass: '',
            repass: '',
            remember_me: false

        };//lưu các giá trị input và state

        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleChange(event) {

        // this.setState({
        //     fullname : event.target.value
        // }); //lưu giá trị của username vào state dựa bằng cách bắt sự kiện onchange

        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });

    }

    onHandleSubmit(event) {
        event.preventDefault(); //chặn submit
        console.log(this.state);
        

    }


    render() {
        return (
            <div>
                <title>Login V13</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/*===============================================================================================*/}
                <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
                {/*===============================================================================================*/}
                <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css" />
                {/*===============================================================================================*/}
                <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
                {/*===============================================================================================*/}
                <link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css" />
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
                {/*===============================================================================================*/}
                <link rel="stylesheet" type="text/css" href="css/util.css" />
                <link rel="stylesheet" type="text/css" href="css/main.css" />
                {/*===============================================================================================*/}
                <div className="limiter">
                    <div className="container-login100">
                        <div className="login100-more" style={{ backgroundImage: 'url("images/bg-01.jpg")' }} />
                        <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">





                            <form
                                className="login100-form validate-form"
                                onSubmit={this.onHandleSubmit}
                            >


                                <span className="login100-form-title p-b-59">
                                    Sign Up
                                </span>
                                <div className="wrap-input100 validate-input" data-validate="Name is required">
                                    <span className="label-input100">Full Name</span>

                                    <input
                                        className="input100"
                                        type="text"
                                        name="fullname"
                                        placeholder="Name..."
                                        onChange={this.onHandleChange}
                                        value={this.state.fullname}
                                    />

                                    <span className="focus-input100" />
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <span className="label-input100">Email</span>

                                    <input
                                        className="input100"
                                        type="text"
                                        name="email"
                                        placeholder="Email addess..."
                                        onChange={this.onHandleChange}
                                        value={this.state.email}
                                    />

                                    <span className="focus-input100" />
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Username is required">
                                    <span className="label-input100">Username</span>

                                    <input
                                        className="input100"
                                        type="text" name="username"
                                        placeholder="Username..."
                                        onChange={this.onHandleChange}
                                        value={this.state.username}
                                    />

                                    <span className="focus-input100" />
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Password is required">
                                    <span className="label-input100">Password</span>

                                    <input
                                        className="input100"
                                        type="text"
                                        name="pass"
                                        placeholder="*************"
                                        onChange={this.onHandleChange}
                                        value={this.state.pass}
                                    />

                                    <span className="focus-input100" />
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Repeat Password is required">
                                    <span className="label-input100">Repeat Password</span>

                                    <input
                                        className="input100"
                                        type="text"
                                        name="repass"
                                        placeholder="*************"
                                        onChange={this.onHandleChange}
                                        value={this.state.repass}
                                    />

                                    <span className="focus-input100" />
                                </div>

                                <div className="flex-m w-full p-b-33">
                                    <div className="contact100-form-checkbox">

                                        <input
                                            className="input-checkbox100"
                                            id="ckb1"
                                            type="checkbox"
                                            name="remember_me"
                                            value={true}
                                            onChange={this.onHandleChange}
                                            checked={this.state.remember_me === true}

                                        />

                                        <label className="label-checkbox100" htmlFor="ckb1">
                                            <span className="txt1">
                                                I agree to the
                            <a href="#" className="txt2 hov1">
                                                    Terms of User
                            </a>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="container-login100-form-btn">
                                    <div className="wrap-login100-form-btn">
                                        <div className="login100-form-bgbtn" />
                                        <button className="login100-form-btn">
                                            Sign Up
                        </button>
                                    </div>
                                    <a href="#" className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30">
                                        Sign in
                        <i className="fa fa-long-arrow-right m-l-5" />
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
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
}


// function SignUp(){







//     return (
//       <div>
//         <title>Login V13</title>
//         <meta charSet="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         {/*===============================================================================================*/}	
//         <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
//         {/*===============================================================================================*/}
//         <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css" />
//         {/*===============================================================================================*/}
//         <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
//         {/*===============================================================================================*/}
//         <link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css" />
//         {/*===============================================================================================*/}
//         <link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css" />
//         {/*===============================================================================================*/}
//         <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css" />
//         {/*===============================================================================================*/}	
//         <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css" />
//         {/*===============================================================================================*/}
//         <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css" />
//         {/*===============================================================================================*/}
//         <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css" />
//         {/*===============================================================================================*/}	
//         <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css" />
//         {/*===============================================================================================*/}
//         <link rel="stylesheet" type="text/css" href="css/util.css" />
//         <link rel="stylesheet" type="text/css" href="css/main.css" />
//         {/*===============================================================================================*/}
//         <div className="limiter">
//           <div className="container-login100">
//             <div className="login100-more" style={{backgroundImage: 'url("images/bg-01.jpg")'}} />
//             <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
//               <form className="login100-form validate-form">
//                 <span className="login100-form-title p-b-59">
//                   Sign Up
//                 </span>
//                 <div className="wrap-input100 validate-input" data-validate="Name is required">
//                   <span className="label-input100">Full Name</span>
//                   <input className="input100" type="text" name="name" placeholder="Name..." />
//                   <span className="focus-input100" />
//                 </div>
//                 <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
//                   <span className="label-input100">Email</span>
//                   <input className="input100" type="text" name="email" placeholder="Email addess..." />
//                   <span className="focus-input100" />
//                 </div>
//                 <div className="wrap-input100 validate-input" data-validate="Username is required">
//                   <span className="label-input100">Username</span>
//                   <input className="input100" type="text" name="username" placeholder="Username..." />
//                   <span className="focus-input100" />
//                 </div>
//                 <div className="wrap-input100 validate-input" data-validate="Password is required">
//                   <span className="label-input100">Password</span>
//                   <input className="input100" type="text" name="pass" placeholder="*************" />
//                   <span className="focus-input100" />
//                 </div>
//                 <div className="wrap-input100 validate-input" data-validate="Repeat Password is required">
//                   <span className="label-input100">Repeat Password</span>
//                   <input className="input100" type="text" name="repeat-pass" placeholder="*************" />
//                   <span className="focus-input100" />
//                 </div>
//                 <div className="flex-m w-full p-b-33">
//                   <div className="contact100-form-checkbox">
//                     <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
//                     <label className="label-checkbox100" htmlFor="ckb1">
//                       <span className="txt1">
//                         I agree to the
//                         <a href="#" className="txt2 hov1">
//                           Terms of User
//                         </a>
//                       </span>
//                     </label>
//                   </div>
//                 </div>
//                 <div className="container-login100-form-btn">
//                   <div className="wrap-login100-form-btn">
//                     <div className="login100-form-bgbtn" />
//                     <button className="login100-form-btn">
//                       Sign Up
//                     </button>
//                   </div>
//                   <a href="#" className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30">
//                     Sign in
//                     <i className="fa fa-long-arrow-right m-l-5" />
//                   </a>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//         {/*===============================================================================================*/}
//         {/*===============================================================================================*/}
//         {/*===============================================================================================*/}
//         {/*===============================================================================================*/}
//         {/*===============================================================================================*/}
//         {/*===============================================================================================*/}
//         {/*===============================================================================================*/}
//       </div>
//     );
// }
export default SignUp;