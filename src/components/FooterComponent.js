import React, {Component} from 'react';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import {PRODUCTS} from '../shared/products';
import {CAROUSELS} from '../shared/carousels';

class Main extends Component {
    
    constructor (props) {
      super (props);
      this.state = {
        products: PRODUCTS,
        carousels: CAROUSELS,
      };
    }