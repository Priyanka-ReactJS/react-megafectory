import React from 'react';
import {Switch , Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Detalis from './components/Detalis';
import Cart from './components/Cart';
import Defalt from './components/Defalt'
import Modal from './components/modal'

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={ProductList}/>
      <Route path="/detalis" component={Detalis}/> 
      <Route path="/cart" component={Cart}/>
      <Route component={Defalt}/>
    </Switch>
    <Modal/>
    </>
  );
}

export default App;
