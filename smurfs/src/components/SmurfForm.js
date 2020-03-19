import React, { useContext } from 'react';
import SmurfContext from '../Contexts/SmurfContext';

const SmurfForm = () => {

    const { changeHandler, submitHandler } = useContext(SmurfContext);
    return (
        <div>
            <form onSubmit={submitHandler} className="smurf-form">
                <label id="label" className="name-label">
                    Name:
                        <input 
                            id="input" 
                            type="text"
                            name="name"
                            onChange={changeHandler} />
                </label>
                <label id="label" className="age-label">
                    Age:
                        <input 
                            id="input" 
                            type="text"
                            name="age"
                            onChange={changeHandler} />
                </label>
                <label id="label" className="height-label">
                    Height:
                        <input 
                            id="input" 
                            type="text"
                            name="height"
                            onChange={changeHandler} />
                </label>
                <button className="submit-button">Submit Smurf</button>
            </form>
        </div>
    );
};

export default SmurfForm;