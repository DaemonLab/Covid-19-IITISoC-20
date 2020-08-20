import React from 'react';
import PropTypes from 'prop-types';

const Cardf = ({property}) => {
    const {index, picture, city} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={city} />
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    {city}<br />
                   
                </p>
                
            </div>
        </div>
    )
}

Cardf.propTypes = {
    property: PropTypes.object.isRequired
}

export default Cardf;