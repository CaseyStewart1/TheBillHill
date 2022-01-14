const { GET_BILLS } = require('../types')

const initialState = {
    bills: []
}

const BillReducer = (state = initialState, action) => {
    switch(action.type) { 
        case GET_BILLS:
            return { ...state, bills: action.payload }
        default: 
            return { ...state }
    }
}

export default  BillReducer