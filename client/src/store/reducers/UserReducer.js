const { IS_LOGGEDIN, GET_USER, NEW_USER } = require('../types')

const initialState = { 
    isLoggedin: false,
    user: [],
    newUser: {
        "name": "",
        "email": "",
    }
}

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_LOGGEDIN:
            return { ...state, isLoggedin: action.payload }
        case NEW_USER:
            return { ...state, newUser: {...state.newUser, ...action.payload}}
        case GET_USER:
            return { ...state, user: action.payload }
        default:
            return { ...state }
    }
}

export default UserReducer