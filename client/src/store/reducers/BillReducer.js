const { GET_BILLS, GET_BILL_BY_ID } = require('../types')

const initialState = {
    bills: [],
    bill: []
}

const BillReducer = (state = initialState, action) => {
    switch(action.type) { 
        case GET_BILLS:
            return { ...state, bills: action.payload }
        case GET_BILL_BY_ID:
            return { ...state, bill: action.payload }
        default: 
            return { ...state }
    }
}

export default  BillReducer