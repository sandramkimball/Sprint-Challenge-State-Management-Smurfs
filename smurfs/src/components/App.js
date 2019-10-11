import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import "./App.css";
import Smurfs from './Smurfs';
import Form from './Form';

const App = () => {
  const {smurfs} = useSelector((state)=>state)
  const dispatch = useDispatch();
  
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Form dispatch={dispatch}/>
        <Smurfs smurfs={smurfs} dispatch={dispatch}/>
      </div>
    );
}

export default App;
