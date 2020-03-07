import React, { useContext } from 'react';
import SmurfContext from '../Contexts/SmurfContext';

const SmurfForm = () => {
    // changeHandler = e => {
    //     this.setState({ [e.target.name]: e.target.value });
    // };

    const {  } = useContext(SmurfContext);
    return (
        <div>
            <form>
                <label>
                    Name:
                        <input type="text" />
                </label>
                <label>
                    Age:
                        <input type="text" />
                </label>
                <label>
                    Height:
                        <input type="text" />
                </label>
                <button>Submit Smurf</button>
            </form>
        </div>
    );
};

export default SmurfForm;