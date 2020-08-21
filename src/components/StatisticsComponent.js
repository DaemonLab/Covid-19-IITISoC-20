import React, { Component } from 'react';
import Cards from "./Cards";
import Chart from "./Chart";
import CountryPicker from "./CountryPicker";
import { fetchData } from "./api";
import styles from "./cards.module.css";
class Statistics extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      country: "",
    };}
    componentDidMount=async() =>{
      const fetchedData = await fetchData();
      this.setState({ data: fetchedData });
    }
    handleCountryChange = async (country) => {
      const fetchedData = await fetchData(country);
      this.setState({ data: fetchedData, country: country });
    };
  

  render() {
    const { data, country } = this.state;
    return (

    	<div className="container">
        <div className= "countrypick">
          <CountryPicker handleCountryChange={this.handleCountryChange} />
        </div>
        <div className="container cardstatistics">
    		      <Cards data={data} country={country} />
        </div>
        <div className="container chartstatistics">
          <Chart data={data} country={country} />
        </div>
      </div>
    );
  }
}


export default Statistics;