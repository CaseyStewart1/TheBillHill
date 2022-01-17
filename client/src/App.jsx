import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Bill from './components/Bills';
import NavBar from './components/NavBar';
import Details from './components/Details';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

const log = 0


function App() {
  return (

    <div>
      {log === 1 ?       
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/bills/:id' component={Details}/>
          <Route exact path='/bills' component={Bill}/>
          <Route path='/profile' component={Profile}/>
        </Switch>
      </div> 
      
      : 
      
      <div>
        <Switch>
          <Route path='/sign-up' component={SignUp}/>
          <Route path='/sign-in' component={SignIn}/>
        </Switch>

      </div>}

    </div>
  );
}

export default App;
