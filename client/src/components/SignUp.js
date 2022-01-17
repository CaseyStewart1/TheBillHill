import React from "react";
import { Link } from 'react-router-dom'

const SignUp = (props) => {
    return (
        <div>
            Sign up in here: 

            user: 
            email:
            password: 

            already have an account? SignIn <Link to='/sign-in'>here</Link>
        </div>
    )
}

export default SignUp 