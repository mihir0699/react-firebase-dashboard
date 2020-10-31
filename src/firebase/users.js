import {firestore} from './config';

export const createUserDocument = (user)=>{
    const docRef = firestore.doc(`/users/${user.uid}`);

    // create user object
    const userProfile = {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      address: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      specialty: '',
      ip: '',
    };
  
    // write to Cloud Firestore
    return docRef.set(userProfile);
}

export const updateUserDoc = (user)=>{
    console.log(user)
    const docRef = firestore.doc(`/users/${user.uid}`);
    return docRef.update(user);
}