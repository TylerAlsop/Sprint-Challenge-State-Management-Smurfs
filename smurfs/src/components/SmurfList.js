import React, { useContext } from 'react';
import SmurfContext from '../Contexts/SmurfContext';
import SmurfCard from './SmurfCard';

const SmurfList = () => {
    const { allSmurfs } = useContext(SmurfContext);

    return(
        <div>
            {allSmurfs.map(smurf => (
                <SmurfCard 
                    key={smurf.id}
                    smurf={smurf} />
            ))}
        </div>
    );
};

export default SmurfList;