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
        <header>         
        </header>
        <section>
          <Form dispatch={dispatch}/>
          <Smurfs smurfs={smurfs} dispatch={dispatch}/>
        </section>
        <footer>
          <img src='http://images.all-free-download.com/images/graphiclarge/smurfs_0_110902.jpg' alt='smurf logo'/>
        </footer>
      </div>
    );
}

export default App;
