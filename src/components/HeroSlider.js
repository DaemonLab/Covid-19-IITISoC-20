import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
 

 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <img className="img-fluid" src={'/assets/images/1.jpg'}/>
              
            </div>
          
          <div className="each-slide">
            <img className="img-fluid" src={'/assets/images/2.jpg'}/>
              
            
          </div>
          <div className="each-slide">
            <img className="img-fluid" src={'/assets/images/3.jpg'}/>
              
          
          </div>
          <div className="each-slide">
            <img className="img-fluid" src={'/assets/images/4.jpeg'}/>
              
          
          </div>
          <div className="each-slide">
            <img  className="img-fluid" src={'/assets/images/5.jpg'}/>
              
          
          </div>
          
        </Slide>
      </div>
    )
}

export default Slideshow