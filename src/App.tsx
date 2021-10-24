import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SignIn } from './Pages/SignIn';
import {Home} from './Pages/Home/index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
