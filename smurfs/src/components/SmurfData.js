import React from 'react';

const SmurfData = props => {
    return (
        <div className='smurf-data'>
            <h3>{props.item.name} the Smurf</h3>
            <p>Age: {props.item.age}yrs</p>
            <p>Height: {props.item.height}</p>

        </div>
        )
}

export default SmurfData;