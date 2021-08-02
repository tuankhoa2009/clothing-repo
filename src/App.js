import './App.css';
import React ,{useEffect,useState} from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUserAct} from '../src/reducer/userReducer';
import {useDispatch} from 'react-redux';





function App() {

  const [currentUser,setCurrentUser] = useState({});
  const dispatch = useDispatch();

  let unsubscribeFromAuth = null;

  useEffect(()=>{
      unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
        if(userAuth){
         const userRef = await createUserProfileDocument(userAuth);
        
         // DÙng để lấy ra thông tin user ở DB firebase
         userRef.onSnapshot(snapShot =>{

          dispatch(setCurrentUserAct({
            id:snapShot.id,
            ...snapShot.data()
          }));
          // setCurrentUser({
          //   id:snapShot.id,
          //   ...snapShot.data()
          // })
         });
        }
      
    })
    
    return ()=>{
      unsubscribeFromAuth()
    }
  },[])

  return (
    <div className="App">
    <Header  />
    <Switch>
      <Route path='/' exact component ={HomePage} />
      <Route path='/shop'  component ={ShopPage} />
      <Route path='/signin'  component ={SignInAndSignUpPage} />
    </Switch>
    </div>
  );
}

export default App;
