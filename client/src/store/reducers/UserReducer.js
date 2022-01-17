const { IS_LOGGEDIN, IS_LOADING } = require('../types')

const initialState = { 
    isLoggedin: false
}

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_LOADING:
            return { ...state, isLoggedin: action.payload }
        default:
            return { ...state }
    }
}

export default UserReducer