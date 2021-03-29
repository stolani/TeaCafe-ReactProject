import React, {Component} from 'react';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
      carousels: state.carousels,
      products: state.products,
     
  };
};

class Main extends Component {
  render () {
    const HomePage = () => {
      return (
          <Home
              carousels={this.props.carousels.filter(carousel => carousel.featured)[0]}
              products={this.props.products.filter(product => product.featured)[0]}
          />
      );
  };


  return (
      <div>
          <Header />
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/directory' render={() => <Directory products={this.props.products} />} />
              <Route exact path='/contactus' component={Contact} />
              <Redirect to='/home' />
          </Switch>
          <Footer />
      </div>
  );
}
  }


export default withRouter(connect(mapStateToProps)(Main));

