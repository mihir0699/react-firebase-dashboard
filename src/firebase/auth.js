import firebase from 'firebase/app';
import "firebase/auth"
import {createUserDocument} from './users'

export const signup = async({firstName, lastName, email, password})=>{
    const resp = await firebase.auth().createUserWithEmailAndPassword(email, password);
    await resp.user.updateProfile({displayName: `${firstName} ${lastName}`})
    const user = resp.user;
    createUserDocument(user);
    return user;
}


export const Logout = ()=>{
    return firebase.auth().signOut();
}

export const login = async({email, password})=>{
 const res = await firebase.auth().signInWithEmailAndPassword(email, password);
 return res.user;
}