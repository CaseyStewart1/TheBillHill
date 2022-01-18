const { IS_LOGGEDIN } = require('../types')

const initialState = { 
    isLoggedin: false
}

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_LOGGEDIN:
            return { ...state, isLoggedin: action.payload }
        default:
            return { ...state }
    }
}

export default UserReducer