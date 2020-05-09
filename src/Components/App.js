import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarMenu from '../assets/components/NavbarMenu/NavbarMenu';

import Home from './Home/Home';
import Computer from './Ordinateur/Ordinateur';
import Phone from './Telephone/Telephone';
import DetailProduit from './DetailProduit/DetailProduit';

import Cart from '../assets/components/Cart/Cart';
import Login from '../assets/components/Login/Login_Register';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavbarMenu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/produits/ordinateur" component={Computer} />
            <Route path="/produits/detail/:nom/:id" component={DetailProduit} />
            <Route path="/produits/telephone" component={Phone} />
            <Route path="/panier" component={Cart} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
