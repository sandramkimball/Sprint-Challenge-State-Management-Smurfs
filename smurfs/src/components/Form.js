import React, {useState} from 'react';

const AddSmurf = ({dispatch}) => {
    const [newSmurf, setNewSmurf] = useState();

    const handleChange = e => {
        e.preventDefault();
        setNewSmurf(e.target.value)
    };

    console.log(`New Smurf Incoming:`, newSmurf)

    return (
        <form>
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