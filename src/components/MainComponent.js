import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Symptoms from './SymptomsComponent';

import Statistics from "./StatisticsComponent";
import Prevention from './PreventionComponent';
import Cards from "./Cards";
import Chart from "./Chart";
import CountryPicker from "./CountryPicker";
import { fetchData } from "./api";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
      
    };}
    

  render() {
    const { data, country } = this.state;
    
    
    return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' component={Home} />
              <Route path='/prevention' component={Prevention} />

              <Route exact path='/symptoms' component={Symptoms} />} />
              
              <Route exact path='/statistics' component={Statistics} />

              <Redirect to="/home" />
        </Switch>
        

        <Footer />
      </div>
    );
  }
}

export default Main;