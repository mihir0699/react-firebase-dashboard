import React, {useState, useEffect} from 'react';
import 'firebase/app'
import {UserSession} from '../firebase/userProvider';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {firestore} from '../firebase/config';
import { updateUserDoc} from '../firebase/users';
const Profile = (props) => {
    const {user} = UserSession();
    const [isLoading, setLoading] = useState(false);
    const { register, setValue, handleSubmit } = useForm();
    const params = useParams();
   const [userDoc, setUserDoc] = useState(null);
   const onSubmit=async(data)=>{
    try {
        setLoading(true);
        console.log("haa")
        await updateUserDoc({ uid: params.id, ...data });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
   }

   const formClassname = `ui big form twelve wide column ${isLoading ? 'loading' : ''}`;
   useEffect(()=>{
    const docRef = firestore.collection("users").doc(user.uid);
    const unsubscribe =  docRef.onSnapshot((document)=>{
    if(document.exists)
    {
        const documentData = document.data()
        setUserDoc(documentData);
        const formData = Object.entries(documentData);
        let x = {};
        formData.forEach((i)=>{
            setValue(i[0], i[1]);
        })
       // setValue(x);

     
    }
    })
    return unsubscribe;
   }, [user.uid, setValue])
    if(!userDoc)
    return null;
    return (
  
        <div
  className="add-form-container"
  style={{ maxWidth: 960, margin: '50px auto' }}
>
  <form className={formClassname} onSubmit = {handleSubmit(onSubmit)}>
    <div className="fields">
      <div className="eight wide field">
        <label>
          Name
          <input type="text" name="name"  ref={register}/>
        </label>
      </div>
      <div className="eight wide field">
        <label>
          Email
          <input type="text" name="email" ref={register}   />
        </label>
      </div>
    </div>
    <div className="fields">
      <div className="six wide field">
        <label>
          Address
          <input type="text" name="address"  ref={register}/>
        </label>
      </div>
      <div className="five wide field">
        <label>
          City
          <input type="text" name="city"  ref={register}/>
        </label>
      </div>
      <div className="two wide field">
        <label>
          State
          <input type="text" name="state"  ref={register}/>
        </label>
      </div>
      <div className="three wide field">
        <label>
          Zip
          <input type="text" name="zip"  ref={register}/>
        </label>
      </div>
    </div>
    <div className="equal width fields">
      <div className="field">
        <label>
          Phone
          <input type="text" name="phone"  ref={register}/>
        </label>
      </div>
      <div className="field">
        <label>
          Specialty
          <select className="specialty" name="specialty" ref={register}>
            <option value="field agent">Field Agent</option>
            <option value="covert operations">Covert Operations</option>
            <option value="intelligence officer">Intelligence Officer</option>
          </select>
        </label>
      </div>
      <div className="field">
        <label>
          ip
          <input type="text" name="ip"  ref={register}/>
        </label>
      </div>
    </div>
    <button type="submit" className="ui submit large grey button right floated">
      Submit
    </button>
  </form>
</div>
    )
}

export default Profile
