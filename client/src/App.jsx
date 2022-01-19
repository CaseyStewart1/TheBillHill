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
import { LogIn, LoadUser } from './store/actions/UserAction';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';


const mapStateToProps = (state) => {
  return {
    userState: state.userState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => dispatch(LogIn()),
    getUser: () => dispatch(LoadUser())
  }
}

function App(props) {

  const handleSubmit = (e) => {
    e.preventDefault()
    // props.logIn()
    props.getUser()
}


  return (

    <div>
      {props.userState.isLoggedin === true ?       
      <div>
        <div className='nav-bar'>
          <NavBar />
        </div>
        <div className='app-body'>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/bills/:id' component={Details}/>
            <Route path='/bills' component={Bill}/>
            <Route path='/profile' component={Profile}/>
          </Switch>
        </div>
      </div> 
      
      : 
      
      <div>
        <Switch>
          <Route exact path='/' >
            <SignIn 
              handleSubmit={handleSubmit}
            />
          </Route>
          <Route path='/sign-up'>
            <SignUp/>          
          </Route>
        </Switch>
      </div>}
      <div className='footer'>
        <h6>DISCLAIMER: THIS IS NOT A GOVERMENT SITE</h6>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
