import React, { useState,useEffect } from "react";
import {Link,useHistory,useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import decode from "jwt-decode";
import img from "./../images/memories.jpg";
import './header.css';
const Header = () => {
  const history=useHistory();
  const dispatch=useDispatch();
  const location=useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage .getItem('profile')));
  useEffect(() => {
    const token=user?.token;
    // JWT
    if(token){
      const decodedToken=decode(token);
      if(decodedToken.exp*1000<new Date().getTime())
      logoutUser();
    }
    setUser(JSON.parse(localStorage .getItem('profile')));
  },[location])
  const logoutUser=()=>{
    dispatch({type: 'LOGOUT'});
    history.push('/');
    setUser(null);
  }
  return (<>
    <div className="headerContainer">
      <a href='/'>
      <div className="left">
        <h1>Memories</h1>
        <img src={img} alt="logo" />
        </div>
      </a>
      {
        user ? (
          <div className="profile">
            <img className="avatar" alt={user.result.name} src={user.result?.imageUrl} />
            <h5 className="userName">{user.result.name.split(' ')[0]}</h5>
            <button className="logout" onClick={logoutUser}>Logout</button>
          </div>
        ) : (
          <Link to='/auth'>
          <button className="signInBtn" to="/auth">signIn</button>
          </Link>
        )
      }
    </div>

  </>
  )
}
export default Header;