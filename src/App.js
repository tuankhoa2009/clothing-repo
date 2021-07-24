import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {

  const Hast = () =>(
    <p>Hast</p>
  )

  return (
    <div className="App">
    <Header />
    <Switch>
      <Route path='/' exact component ={HomePage} />
      <Route path='/shop'  component ={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;
