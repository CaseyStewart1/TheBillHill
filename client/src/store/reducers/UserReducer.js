const { IS_LOGGEDIN, GET_USER } = require('../types')

const initialState = { 
    isLoggedin: false,
    user: []
}

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_LOGGEDIN:
            return { ...state, isLoggedin: action.payload }
        case GET_USER:
            return { ...state, user: action.payload }
        default:
            return { ...state }
    }
}

export default UserReducer