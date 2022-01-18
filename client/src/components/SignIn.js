import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LogIn } from '../store/actions/UserAction'



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
        <div>
            <div>
                sign in here
            </div>
            <div>
                <form>
                    <div>
                        <input
                        type='text'
                        placeholder='Username'
                        
                        />
                    </div>
                    <div>
                        <input 
                        type='text'
                        placeholder='Password'
                        />
                    </div>
                    <button onClick={props.handleSubmit}> Submit </button>
                </form>
            </div>
            <div>
                dont have an account? SignUp <Link to='/sign-up'>here</Link>
            </div>
        </div>
    )
}

// export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
export default SignIn