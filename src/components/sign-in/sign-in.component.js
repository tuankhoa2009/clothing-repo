
import React,{useState,useRef}  from 'react';

import {useHistory} from 'react-router-dom';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle, auth} from '../../firebase/firebase.utils';


const  SignIn =( props)=>{
    
    const  [email,setEmail] = useState('');
    const  [password,setPassword] = useState('');
    const history = useHistory();

    const  refEmail = useRef();
    const refPassword = useRef();


    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        try {
            await auth.signInWithEmailAndPassword(email,password)
            setEmail('');
            setPassword('')
            history.push('/');
         
        } catch (error) {
            console.log(error);
        }

      
        
    }


    return (
    <div className='sign-in'>  
    <h2>I already have an account</h2>
    <span>Sign in with your email and password </span>

    <form onSubmit={handleSubmit}>
        <FormInput onChange={(e) =>{setEmail(e.target.value)}} label='email' name='email' value={email} type='email' refProp={refEmail} />
      
        <FormInput onChange={(e) =>{setPassword(e.target.value)}} label='password' name='password' value={password} type='password'  refProp={refPassword} />

        <CustomButton type='submit'>Sign in</CustomButton>
        <CustomButton style={{marginLeft:10,backgroundColor:'#1E90FF'}} onClick={signInWithGoogle}>Sign in with Google</CustomButton>
    </form>

    </div> 
    );
}
export default SignIn;