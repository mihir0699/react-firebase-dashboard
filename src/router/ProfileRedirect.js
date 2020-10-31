import React from 'react'
import {Redirect, Route} from "react-router-dom"
import { UserSession } from '../firebase/userProvider'

const ProfileRedirect = ({component : Component, ...rest}) => {
    const {user} = UserSession();
    return (
        <Route {...rest} render = {(props)=> !user ? (<Component {...props}/>) : (<Redirect to={{
            pathname:`/profile/${user.uid}`,
            state : {from:  props.location},
    
        }}/>)}  />

    )
}

export default ProfileRedirect
