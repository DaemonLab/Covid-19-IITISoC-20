import React ,{ Component } from 'react';
import Carousel from 'react-bootstrap-carousel';
import {Jumbotron } from 'reactstrap';
import Slideshow from "./HeroSlider";
class Home extends Component {
	render() {
    	return(
		    <div className="Home">
		    
		    	<Slideshow className="responsive "/>
		    	<div className="homeinfo">
		    		<h2>CORONA VIRUS PANDEMIC</h2>
		    		<h3>The COVID-19 pandemic has  demonstrated the interconnected nature of our world – and that no one is safe until everyone is safe.  Only by acting in solidarity can communities save lives and overcome the devastating socio-economic impacts of the virus. </h3>
		    	</div>	
		    </div>        
    );
}
}
export default Home;