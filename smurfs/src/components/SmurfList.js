import React, { useContext } from 'react';
import SmurfContext from '../Contexts/SmurfContext';
import SmurfCard from './SmurfCard';

const SmurfList = (props) => {
    const { allSmurfs, smurf } = useContext(SmurfContext);

    

    return(
        <div>
            {allSmurfs.map(info => (
                <SmurfCard 
                    key={info.id}
                    info={info} />
            ))}
        </div>
    );
};

export default SmurfList;