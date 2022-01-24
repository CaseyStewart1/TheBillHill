import { GetActiveBills, GetBillById, GetBills, GetPassedBills, GetStatements } from "../../services/BillServices";
import { GET_ACTIVE_BILLS, GET_BILLS, GET_BILL_BY_ID, GET_PASSED_BILLS, GET_STATEMENTS, IS_LOADING } from "../types";

export const LoadBills = () => {
    return async (dispatch) => {
        try {
            const bills = await GetBills()
            dispatch({
                type: GET_BILLS,
                payload: bills
            })
        } catch (error) {
            throw error
        }
    }
}

export const LoadActiveBills = () => {
    return async (dispatch) => {
        try {
            const activeBills = await GetActiveBills()
            dispatch({
                type: GET_ACTIVE_BILLS,
                payload: activeBills
            })
        } catch (error) {
            throw error
        }
    }
}

export const LoadPassedBills = () => {
    return async (dispatch) => {
        try {
            const passedBills = await GetPassedBills()
            dispatch({
                type: GET_PASSED_BILLS,
                payload: passedBills
            })
        } catch (error) {
            throw error
        }
    }
}

export const LoadBillById = (congress) => {
    return async (dispatch) => {
        try {
            const bill = await GetBillById(congress)
            dispatch({
                type: GET_BILL_BY_ID,
                payload: bill
            })
            dispatch({
                type: IS_LOADING,
                payload: false,
            })
        } catch (error) {
            throw error
        }
    }
}

export const LoadStatements = () => {
    return async (dispatch) => {
        try {
            const statements = await GetStatements()
            dispatch({
                type: GET_STATEMENTS,
                payload: statements
            })
        } catch (error) {
            throw error
        }
    }
}