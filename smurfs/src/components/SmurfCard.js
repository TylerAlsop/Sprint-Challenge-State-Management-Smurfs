import React, { useContext } from 'react';
import SmurfContext from '../Contexts/SmurfContext';

const SmurfCard = (props) => {
    return(
        <div className="smurf-card">
            <h2 className="smurf-name">{props.smurf.name}</h2>
            <div className="smurf-stats">
                <h3 id="stat" className="smurf-age">Age: {props.smurf.age}</h3>
                <h3 id="stat" className="smurf-height">Height: {props.smurf.height}</h3>
            </div>

        </div>
    );
};

export default SmurfCard;