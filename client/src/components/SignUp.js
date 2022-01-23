import React from "react";
import { Link } from 'react-router-dom'
// import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";




const SignUp = (props) => {


    return (
        <div>
            <div>
                sign up here
            </div>
            <div>
                <form>
                    <div>
                        <input
                        type='text'
                        name="name"
                        value={props.userName}
                        placeholder='Username'
                        onChange={props.handleChange}
                        />
                    </div>
                    <div>
                        <input 
                        type='text'
                        name="email"
                        value={props.email}
                        placeholder='Email'
                        onChange={props.handleChange}
                        />
                    </div>
                    <button onClick={props.handleSignUp}> Submit </button>
                </form>
            </div>
            <div>
                already have an account? SignIn <Link to='/'>here</Link>
            </div>
        </div>
    )
}

export default SignUp