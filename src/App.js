import { Provider } from 'react-redux';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

import QueryPage from './components/QueryPage';
import ResultsPage from './components/ResultsPage';
import Notification from './components/Notification';

import { store } from "./data/store";

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Notification />
        <Switch>
          <Route exact path="/" component={QueryPage} />
          <Route path="/results" component={ResultsPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
