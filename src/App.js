import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Result from './components/Result';

export default function App() {
  const [ history, setHistory ] = useState([]);
  const [ ingredients, setIngredients ] = useState("");

  const onChange = value => {
    setIngredients(value);
  }

  const addHistory = () => {
    if(!history.includes(ingredients)){
      setHistory([...history, ingredients]);
    }
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home onChange={onChange} history={history} addHistory={addHistory} />
        </Route>
        <Route path="/result" >
          <Result ingredients={ingredients}/>
        </Route>
      </Switch>
    </Router>
  );
}

