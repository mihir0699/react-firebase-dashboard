import React, {useState, useContext, useEffect} from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

export const UserContext = React.createContext()
const UserProvider = (props) => {
    const [session, setSession] = useState({user:null, loading:false});
    useEffect(()=>{
        const unsubscribe = firebase.auth().onAuthStateChanged((user)=>{
            setSession({loading:false, user})
        })
        return()=>unsubscribe();
    }, [])
    return(
        <UserContext.Provider value={session}>
            {!session.loading && props.children}

        </UserContext.Provider>
    )
}

export const UserSession =()=>{
    const session = useContext(UserContext);
    return session;
}
export default UserProvider
