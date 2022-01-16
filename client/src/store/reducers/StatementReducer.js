const { GET_STATEMENTS } = require('../types')

const initialState = {
    statements: []
}

const StatementReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_STATEMENTS:
            return { ...state, statements: action.payload }
        default:
            return { ...state }
    }
}

export default StatementReducer