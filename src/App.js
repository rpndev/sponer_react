import { Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Notification from './components/Notification/Notification';
import IngredientQueryPage from './components/IngredientQueryPage/IngredientQueryPage';
import IngredientRecipesPage from './components/IngredientRecipesPage/IngredientRecipesPage';

import { history } from "./data/store";

export const App = () => {
  return (
    <Router history={history}>
      <Notification />
      <Switch>
        <Route exact path="/" component={IngredientQueryPage} />
        <Route path="/results/:ingredient/recipes" component={IngredientRecipesPage} />
      </Switch>
    </Router>
  );
}

export default App;
