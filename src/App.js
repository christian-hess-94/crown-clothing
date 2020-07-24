import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom'

const testPage = () => {
  return <h1>TEST PAGE</h1>
}
function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={testPage} />
    </Switch>
  );
}

export default App;
