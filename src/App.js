import React from 'react'
import './App.css';
import HomePage from './components/pages/homepage/hompageComponent'
import ShopPage from './components/pages/shoppage/shopPage'
import {Switch , Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
