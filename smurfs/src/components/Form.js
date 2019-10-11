import React, {useState} from 'react';

const AddSmurf = ({dispatch}) => {
    const [newSmurf, setNewSmurf] = useState();

    const handleChange = e => {
        e.preventDefault();
        setNewSmurf(e.target.value)
    };

    const handleSubmit = e =>{
        e.preventDefault();
    }

    console.log(`New Smurf Incoming:`, newSmurf)

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='smurf'
                value={newSmurf}
                onChange={handleChange}
                placeholder='Name'
            />
            <div>
                <button onClick={()=> dispatch({type: 'ADD_SMURF', payload: newSmurf})}>Add Smurf</button>

            </div>
        </form>
    )
}


export default AddSmurf;