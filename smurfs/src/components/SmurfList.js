import React, { useContext } from 'react';
import SmurfContext from '../Contexts/SmurfContext';
import SmurfCard from './SmurfCard';

const SmurfList = () => {
    const {  } = useContext(SmurfContext);
    return(
        <div>
            <SmurfCard />
        </div>
    );
};

export default SmurfList;