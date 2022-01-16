const { GET_BILLS, GET_BILL_BY_ID, IS_LOADING } = require('../types')

const initialState = {
    bills: [],
    bill: [],
    isLoading: true
}

const BillReducer = (state = initialState, action) => {
    switch(action.type) { 
        case IS_LOADING:
            return { ...state, isLoading: action.payload}
        case GET_BILLS:
            return { ...state, bills: action.payload }
        case GET_BILL_BY_ID:
            return { ...state, bill: action.payload }
        default: 
            return { ...state }
    }
}

export default  BillReducer