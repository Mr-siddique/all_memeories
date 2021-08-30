import React, { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import Icon from './Icon';
import { useHistory } from 'react-router-dom';
import './Auth.css';
import { signIn,signUp } from '../../actions/auth';
const Auth = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',

    });
    const dispatch = useDispatch();
    const history = useHistory();
    const [isSignUp, setIsSignUp] = useState(false);
    const toggleSignup = (e) => {
        setIsSignUp(prevState => !prevState);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevData) => {
            return { ...prevData,[name]: value};
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignUp){
            dispatch(signUp(user,history));
        }else{
            dispatch(signIn(user,history));
        }
          setUser({ name: "", email: "", password: "" });
    }
    const googleSucess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            history.push('/');
        } catch (err) {
            console.log(err);
        }
        // console.log(result);
    }
    const googleFailure = () => {
        console.log('google login fail.')
    }
    return (
        <div className='formContainer'>
            <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
            <form onSubmit={handleSubmit}>
                {isSignUp ?
                    <input name="name" type="name" placeHolder="Enter Your Name" onChange={handleChange} value={user.name} autoFocus required /> : null}
                <input name="email" type="email" placeHolder="Enter Your Email" onChange={handleChange} value={user.email} required />
                <input name='password' type="password" placeHolder="Enter your Password" onChange={handleChange} value={user.password} required />
                <button className='toggle' onClick={toggleSignup}>{isSignUp ? 'Already have an account? signIn' : `Don't have an account? SignUp`}</button>
                {/* <button className='googleAuth' onClick={handleGoogleAuth}>Go With Google!</button> */}
                <GoogleLogin
                    clientId="836098675975-89rrj5ujk08q592kmh7ch124o0h3e3fq.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <button className='googleAuth' onClick={renderProps.onClick} disabled={renderProps.disabled} starticon={<Icon />}
                        >
                            Go With Google!
                        </button>
                    )}
                    onSuccess={googleSucess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />
                <button type="submit" className="customAuth">{isSignUp ? 'SignUp' : 'SignIn'}</button>
            </form>
        </div>
    )
}
export default Auth;