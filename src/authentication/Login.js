import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import LoginNav from '../Navbars/LoginNav';
import { doLogin } from '../store/actions/LoginAction';
import '../CSS/Login.css';



function Login() {
    const loggedInUser = useSelector(state => state.loginReducer.loggedInUser)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formErrors, setFormErrors] = useState({});


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userRole, setUserRole] = useState("");


    const doSignIn = () => {

        let errors = {};
        if (!username) {
            errors['UsernameError'] = "username cannot be empty";
        }

        if (!password) {
            errors['passwordError'] = "Password cannot be empty";
        }
        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            console.log("data is valid");

            const payload = {
                username: username,
                password: password,
                userRole: userRole
            }
            dispatch(doLogin(payload));
        }

    }

    return (
        <body className="body-login">
            <LoginNav/>
            {
                loggedInUser !== null ?

                loggedInUser.userRole==='user' ?
                    navigate('/flight/search')
                    :
                    loggedInUser.userRole==='admin'&&
                    navigate('/admin')
                    :

                    <div className='container-login'> 
                        <div>
                            <h2 className='h2-loginpage'>Login</h2><hr></hr>
                        </div>
                         

                        <div className="form-group">
                            Username: &nbsp; &nbsp; 
                            <label htmlFor='username'>
                                <input type="username" className="form-control" placeholder="Enter your username" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                            </label>
                            {
                                formErrors.UsernameError &&
                                <div style={{ color: 'red' }}>{formErrors.UsernameError}</div>
                            }
                        </div>
                        <div className="form-group">Password: &nbsp; &nbsp; &nbsp; 
                            <label htmlFor='password'>
                                <input type="password" className="form-control" name="password" placeholder="Enter your Password" value={password} onChange={e => setPassword(e.target.value)} />
                            </label>
                            {
                                formErrors.passwordError &&
                                <div style={{ color: 'red' }}>{formErrors.passwordError}</div>
                            }
                        </div>



                        <div className="form-group">User Role:  
                        
                            <label htmlFor='userRole' class="control-label">
                                <select className='form-control' name="userRole" value={userRole} onChange={e => setUserRole(e.target.value)}>
                                    <option>----Select--------</option>
                                    <option value={"user"}>User</option>
                                    <option value={"admin"}>Admin</option>

                                </select>
                            </label>

                            
                        </div>



                        <div>
                            <button onClick={doSignIn} class="btn btn-outline-success">                                
                                Login</button>&nbsp;




                        </div><hr></hr>
                        <div className='p-login'>

                            <p>If you are not a registered User, Please <Link to={'/user/add'} ><b> Register </b></Link> here.</p>
                        </div>

                    </div>

            }

        </body>
    )
}

export default Login;