import React,{useState,useRef} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';



const SignUp =(props) =>{

    const [displayName,setdisplayName] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [confirmPassword ,setconfirmPassword ] = useState('');

    
    const refEmail = useRef();
    const refPassword = useRef();
    const refdisplayName = useRef();
    const refconfirmPassword = useRef();


    const handleSubmit = async (e)=>{
        e.preventDefault();

        if (refPassword.current.value !== refconfirmPassword.current.value) {
            alert("passwords don't match");
            return;
          }

          try {
            const { user } = await auth.createUserWithEmailAndPassword(
              refEmail.current.value,
              refPassword.current.value
            );
           const displayName = refdisplayName.current.value;
            await createUserProfileDocument(user, { displayName });

            setdisplayName('');
            setemail('');
            setpassword('');
            setconfirmPassword('');

          } catch (error) {
            console.error(error);
          }

    }


    return (
        <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            refProp={refdisplayName}
            onChange={(e)=>{setdisplayName(e.target.value)}}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            label='Email'
            onChange={(e)=>{setemail(e.target.value)}}
            refProp={refEmail}
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            refProp={refPassword}
            onChange={(e)=>{setpassword(e.target.value)}}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            refProp={refconfirmPassword}
            onChange={(e)=>{setconfirmPassword(e.target.value)}}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>

    );
}


export default SignUp;