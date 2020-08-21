import React, { Component } from 'react';

import Cardf from './Card';
import data from '../shared/data'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

// class component
class Symptoms extends Component {

  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const {properties, property} = this.state;
    return (
      <div className="Menu">
        <div className="container">
          <div className="row">
            <div class="col-12">
              <h2>SYMPTOMS</h2>
              <h3>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</h3>
                       
            </div>
            <ol class="col-12 breadcrumb">
              <li class="breadcrumb-item"><a href="./index.html">Home</a></li>
              <li class="breadcrumb-item active">Symptoms</li>
            </ol>
          </div>
        
          
 
        
          <div className="symptom" >
            <h3>Most common symptoms:</h3>

                
                <button 
                  onClick={() => this.prevProperty()} 
                  disabled={property.index === 0}
                >Prev</button>
                <button 
                  onClick={() => this.nextProperty()} 
                  disabled={property.index === data.properties.length-1}
                >Next</button>

                <div className="page">
                    

                    <div className="col">
                      <div className={`cards-slider active-slide-${property.index}`}>
                        <div className="cards-slider-wrapper" style={{
                          'transform': `translateX(-${property.index*(100/properties.length)}%)`
                        }}>
                          {
                            properties.map(property => <Cardf key={property._id} property={property} />)
                          }
                        </div>
                      </div>
                    </div>
                </div>

          </div>
          <div >
            <h3>Less common symptoms:</h3>
              <div className="container">
                <div className="row align-items-start">
                  <div className="col-12 col-sm-4">
                    <Card>
                      <CardImg src={"/assets/images/headache.png"}/>
                      <CardBody>
                        <CardTitle className="lesssymptoms">HEADACHE</CardTitle>
                          
                      </CardBody>
                    </Card>
                  </div>
                  <div className="col-12 col-sm-4">
                    <Card>
                      <CardImg src={'/assets/images/sorethroat.jpg'} />
                      <CardBody>
                        <CardTitle className="lesssymptoms">SORE THROAT</CardTitle>
                          
                      </CardBody>
                    </Card>
                  </div>
                  <div className="col-12 col-sm-4">
                    <Card>
                      <CardImg src={'/assets/images/unnameds.png'} />
                      <CardBody>
                        <CardTitle className="lesssymptoms">ACHES AND PAINS</CardTitle>
                          
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </div>
              
          </div>
        </div>
      </div>
    );
  }
}

export default Symptoms;
