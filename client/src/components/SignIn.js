import React from 'react';
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
// import { LogIn } from '../store/actions/UserAction'

// const mapStateToProps = (state) => {
//     // console.log(state)
//     return {
//       userState: state.userState
//     }
//   }

// const mapDispatchToProps = (dispatch) => {
//     return {
//       logIn: () => dispatch(LogIn())
//     }
//   }

const SignIn = (props) => {
  // const handleSubmit = (e) => {
  //     e.preventDefault()
  //     props.logIn()
  // }

  return (
    <div className="signInPage">
      <img
        src="https://cdn.vox-cdn.com/thumbor/gE3ABsBgUGSQPgeJJd9XEc7yUIY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19780477/washington.jpg"
        alt="header photo"
        width="33%"
      />
      <div>sign in here</div>
      <div className="signInForm">
        <form>
          <div>
            <input type="text" placeholder="Username" />
          </div>
          <div>
            <input type="text" placeholder="Password" />
          </div>
          <button onClick={props.handleSubmit}> Submit </button>
        </form>
      </div>
      <div>
        dont have an account? SignUp <Link to="/sign-up">here</Link>
      </div>
    </div>
  );
};

// export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
export default SignIn;
