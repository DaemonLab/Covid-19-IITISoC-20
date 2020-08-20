import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
 

 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <img className="img-fluid" src={'/assets/images/coronas.jpg'}/>
              
            </div>
          
          <div className="each-slide">
            <img className="img-fluid" src={'/assets/images/feverchecks.jpg'}/>
              
            
          </div>
          <div className="each-slide">
            <img className="img-fluid" src={'/assets/images/testingss.jpg'}/>
              
          
          </div>
          <div className="each-slide">
            <img className="img-fluid" src={'/assets/images/socialdistancingss.jpg'}/>
              
          
          </div>
          <div className="each-slide">
            <img  className="img-fluid" src={'/assets/images/crowdss.jpg'}/>
              
          
          </div>
          
        </Slide>
      </div>
    )
}

export default Slideshow