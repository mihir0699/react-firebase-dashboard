import React from 'react'
import {Redirect, Route} from "react-router-dom"
import { UserSession } from '../firebase/userProvider'

const PrivateRoute = ({component : Component, ...rest}) => {
    const {user} = UserSession();
   const id = rest.computedMatch.params.id;
    return (
        <Route {...rest} render = {(props)=> user && user.uid===id ? (<Component {...props}/>) : (<Redirect to={{
            pathname:`/login`,
            state : {from:  props.location},
    
        }}/>)}  />

    )
}
 
export default PrivateRoute
