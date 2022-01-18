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
import { LogIn } from './store/actions/UserAction';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    userState: state.userState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => dispatch(LogIn())
  }
}

function App(props) {

  const handleSubmit = (e) => {
    e.preventDefault()
    props.logIn()
}


  return (

    <div className='appPage'>
      {props.userState.isLoggedin === true ?       
      <div>
        <div className='header'>
          <img src='https://cdn.vox-cdn.com/thumbor/gE3ABsBgUGSQPgeJJd9XEc7yUIY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19780477/washington.jpg' alt="header photo" width="33%" />
        <NavBar />
        </div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/bills/:id' component={Details}/>
          <Route path='/bills' component={Bill}/>
          <Route path='/profile' component={Profile}/>
        </Switch>
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
