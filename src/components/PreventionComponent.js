import React, { Component } from 'react';
import {Jumbotron} from 'reactstrap';

class Prevention extends Component {
	render() {
        return(
            <div className="prevent">
           
                    <div className="container">
                        <div className="row">
                            <div class="col-12">
				               <h1>PREVENTIONS</h1>
				               
				            </div>
				            <ol class="col-12 breadcrumb">
				                <li class="breadcrumb-item"><a href="./index.html">Home</a></li>
				                <li class="breadcrumb-item active">Prevention</li>
				            </ol>
                            
                            <div className="col-12 col-sm-6">
                            	<h2>To prevent the spread of COVID-19:</h2>
                            		<h3>Clean your hands often. Use soap and water, or an alcohol-based hand rub.
Maintain a safe distance from anyone who is coughing or sneezing.
Wear a mask when physical distancing is not possible.
Don’t touch your eyes, nose or mouth.
Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.
Stay home if you feel unwell.
If you have a fever, cough and difficulty breathing, seek medical attention.
Calling in advance allows your healthcare provider to quickly direct you to the right health facility. This protects you, and prevents the spread of viruses and other infections.</h3>
							</div>
							<div className="col-12 col-sm-6">
                            	<img className="responsive" src={'/assets/images/prevention.jpg'}/>
                            </div>

                            <div className="col-12 col-sm-6">
                            	<img className="responsive" src={'/assets/images/mask.gif'}/>
                            </div>
                            <div className="col-12 col-sm-6">
                            	<h2>Masks</h2>
									<h3>Masks can help prevent the spread of the virus from the person wearing the mask to others. Masks alone do not protect against COVID-19, and should be combined with physical distancing and hand hygiene. Follow the advice provided by your local health authority.</h3>
                            </div>	
                        </div>
                        
                    </div>
            </div>
            );
        }
    }



export default Prevention;
