import React from 'react';
import PropTypes from 'prop-types';

const Cardf = ({property}) => {
    const {index, picture, name} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={name} />
            <div className="details">
            
                <p className="location">
                    {name}<br />
                   
                </p>
                
            </div>
        </div>
    )
}

Cardf.propTypes = {
    property: PropTypes.object.isRequired
}

export default Cardf;