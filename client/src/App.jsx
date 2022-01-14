import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Bill from './components/Bills';
import NavBar from './components/NavBar';



function App() {
  return (
    <div>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/bills' component={Bill}/>
          {/* <Route path='/bills/:id' component={'details'}/>
          <Route path='/user' component={'user'}/> */}
        </Switch>
        <h4>
          Hello
        </h4>
      </div>
    </div>
  );
}

export default App;
