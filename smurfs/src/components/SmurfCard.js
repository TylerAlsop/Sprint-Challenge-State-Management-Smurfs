import React, { useContext } from 'react';
import SmurfContext from '../Contexts/SmurfContext';

const SmurfCard = (props) => {
    return(
        <div className="smurf-card">
            <h2 className="smurf-name">{props.smurf.name}</h2>
            <h3 className="smurf-age">{props.smurf.age}</h3>
            <h3 className="smurf-height">{props.smurf.height}</h3>
        </div>
    );
};

export default SmurfCard;