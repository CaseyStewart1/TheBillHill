import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { UserToDelete, LogOut, UserToUpdate, UpdateCurrentUser } from '../store/actions/UserAction'


const mapStateToProps = ( state ) => {
    return {
        userState: state.userState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (id) => dispatch(UserToDelete(id)),
        loggedOut: () => dispatch(LogOut()),
        updateState: (formValue) => dispatch(UpdateCurrentUser(formValue)),
        updateUser: (id, form) => dispatch(UserToUpdate(id, form))
    }
}

const Profile = (props) => {

    const history = useHistory()
    const [render, updateRender] = useState(0)
    const [edit, updateEdit] = useState(0)

    useEffect(() =>{
        history.push(`/profile/${props.userState.user.id}`)
    },[])

    const handleChange = (e) => {
        props.updateState({[e.target.name]: e.target.value})
        // console.log({[e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.updateUser(props.userState.user.id, props.userState.user)
        // history.push(`/profile`)
        window.location.reload()
    }

    const handleDelete = () => {
        props.delete(props.userState.user.id)
        props.loggedOut()
        history.push('/')
        updateRender(0)
    }


    return (
        <div>
            <div>
                {edit === 0 ? <div>
                    <div>
                        Welcome! {props.userState.user.name}
                        <button onClick={() => updateEdit(1)}>edit profile</button>
                    </div>
                    <div>
                        email: {props.userState.user.email}
                    </div>
                    <div>
                        location: {props.userState.user.location}
                    </div>
                    <div>
                        Saved Bills:
                            {props.userState.user.Bills.map((e) => (
                                <li key={e.id}>
                                    {e.title}
                                    <a href={`${e.url}`} target='_blank'>details</a>
                                </li>
                            ))}
                    </div>
                </div> : <button onClick={() => updateEdit(0)}>cancel edit</button> }

                {edit === 1 ? <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type='text'
                                value={props.userState.user.name}
                                name={`name`}
                                onChange={handleChange}
                                placeholder={`${props.userState.user.name}`}
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                value={props.userState.user.email}
                                name={`email`}
                                onChange={handleChange}
                                placeholder={`${props.userState.user.email}`}
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                value={props.userState.user.location}
                                name={`location`}
                                onChange={handleChange}
                                placeholder={`${props.userState.user.location}`}
                            />
                        </div>
                        <button>submit</button>
                    </form>
                </div>: null}
            </div>
            {/* {console.log(props.userState.user)} */}
    
            <div>
            
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