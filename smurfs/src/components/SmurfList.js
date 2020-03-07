import React, { useContext } from 'react';
import SmurfContext from '../Contexts/SmurfContext';
import SmurfCard from './SmurfCard';

const SmurfList = (props) => {
    const { smurfs } = useContext(SmurfContext);
    return(
        <div>
            {smurfs.map(smurf => (
                <SmurfCard 
                    key={smurf.id}
                    smurf={smurf} />
            ))}
        </div>
    );
};

export default SmurfList;