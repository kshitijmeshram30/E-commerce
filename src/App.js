import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import Productlist from './Components/Productlist';
import { Switch, Route } from 'react-router-dom';
import Details from './Components/Details';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
    <Route path="/" component={Nav}/>
      <Switch>
        <Route exact path="/" component={Productlist}/>
        <Route path= "/details" component={Details}/>
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
