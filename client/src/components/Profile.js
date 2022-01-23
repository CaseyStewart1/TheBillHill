import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { UserToDelete, LogOut } from '../store/actions/UserAction'


const mapStateToProps = ( state ) => {
    return {
        userState: state.userState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (id) => dispatch(UserToDelete(id)),
        loggedOut: () => dispatch(LogOut())
    }
}

const Profile = (props) => {

    const history = useHistory()

    const [render, updateRender] = useState(0)

    useEffect(() =>{
        history.push(`/profile/${props.userState.user.id}`)
    },[])

    const handleDelete = () => {
        props.delete(props.userState.user.id)
        props.loggedOut()
        history.push('/')
        updateRender(0)
    }


    return (
        <div>
            <div>
                this is profile
            </div>
            <div>
                {console.log(props.userState.user)}
                <div>
                    name: {props.userState.user.name}
                    <button>edit</button>
                </div>
                <div>
                    email: {props.userState.user.email}
                    <button>edit</button>
                </div>
                <div>
                    location: {props.userState.user.location}
                    <button>edit</button>
                </div>
                <div>
                    {render === 0 ? 'delete this account': 'are you sure?'} 
                    {render === 0 ? <button onClick={() => updateRender(1)}>delete</button> : <button onClick={() => updateRender(0)}>cancel</button>}
                    {render === 1 ? <button onClick={handleDelete}> confirm </button> : null}
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)