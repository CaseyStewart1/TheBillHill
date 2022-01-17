import React from 'react'
import { Link } from 'react-router-dom'

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
                        placeholder='Username'
                        
                        />
                    </div>
                    <div>
                        <input 
                        type='text'
                        placeholder='Password'
                        />
                    </div>
                </form>
            </div>
            <div>
                dont have an account? SignUp <Link to='/sign-up'>here</Link>
            </div>
        </div>
    )
}

export default SignIn