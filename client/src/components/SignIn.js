import React from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { LogIn } from '../store/actions/UserAction'




const SignIn = (props) => {
  

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
                        placeholder='Email'
                        
                        />
                    </div>
                    <div>
                        <input 
                        type='text'
                        placeholder='Username'
                        />
                    </div>
                    <button onClick={props.handleLogIn}> Submit </button>
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