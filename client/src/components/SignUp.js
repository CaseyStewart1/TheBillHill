import React from "react";
import { Link } from 'react-router-dom'
// import { connect } from "react-redux";
import { useHistory } from "react-router-dom";




const SignUp = (props) => {

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push('/')
    }


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
                        placeholder='Username'
                        />
                    </div>
                    <div>
                        <input 
                        type='text'
                        placeholder='Email'
                        />
                    </div>
                    {/* <div>
                        <input 
                        type='text'
                        placeholder='Password'
                        />
                    </div>
                    <div>
                        <input 
                        type='text'
                        placeholder='Confirm Password'
                        />
                    </div> */}
                    <button onClick={handleSubmit}> Submit </button>
                </form>
            </div>
            <div>
                already have an account? SignIn <Link to='/'>here</Link>
            </div>
        </div>
    )
}

export default SignUp