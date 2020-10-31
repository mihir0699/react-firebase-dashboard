import React from 'react';
import {Logout} from './firebase/auth';
import {useHistory} from "react-router-dom"
import {UserSession} from './firebase/userProvider'
function Header() {
  const history = useHistory();
  const {user} = UserSession();
  const logout = async()=>{
  await Logout();
  history.push("/signup")
  }
  return (
    <header>
      <h2>The Grid</h2>
     {user && (
       <button className="ui secondary button logout" onClick={logout}>
       Logout
     </button>
     )} 
    </header>
  )
}

export default Header;