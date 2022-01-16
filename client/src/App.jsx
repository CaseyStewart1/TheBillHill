import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Bill from './components/Bills';
import NavBar from './components/NavBar';
import Details from './components/Details';



function App() {
  return (
    <div>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/bills/:id' component={Details}/>
          <Route exact path='/bills' component={Bill}/>
          {/* <Route path='/user' component={'user'}/> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
