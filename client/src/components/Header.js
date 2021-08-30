import React from "react";
import img from "./../images/memories.jpg"
const Header=()=>{
    return (
        <div className="headerContainer">
          <h1>Memories</h1>
          <img src={img} alt="logo"/>
        </div>
    )
}
export default Header;