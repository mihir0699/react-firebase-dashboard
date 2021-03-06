import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {signup, login} from "../firebase/auth"
import { Link } from "react-router-dom"
function Login(props) {
    const {handleSubmit, register, reset} = useForm();
    const [loading, setLoading] = useState(false);
    const onSubmit = async(data)=>{
        try{
            setLoading(true);
            const newUser = await login(data);
            reset();
            setLoading(false);
            if(newUser)
            props.history.push(`/profile/${newUser.uid}`)
        }catch(er)
        {
            console.log(er);
            setLoading(false);
        }
       
    }
    const formClassName = `ui form ${loading ? "loading" : ""}`
  return (
    <div className="login-container">
      <div className="ui card login-card">
        <div className="content">
          <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
          
            <div className="field">
              <label>
                Email
                <input type="email" name="email" placeholder="Email" ref={register}/>
              </label>
            </div>
            <div className="field">
              <label>
                Password
                <input type="password" name="password" placeholder="Password"ref={register}/>
              </label>
            </div>
            <div className="field actions">
              <button className="ui primary button login" type="submit">
                Login
              </button>
              or
              <Link to="/signup">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

