import React from 'react';

const SmurfData = props => {
    return (
        <div>
            <h3>Here is a Smurf:</h3>
            <p>Name: {props.item.name}</p>
            <p>Age: {props.item.age}</p>


        </div>
        )
}

export default SmurfData;