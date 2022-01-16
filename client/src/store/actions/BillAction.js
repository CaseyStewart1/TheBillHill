import { GetBillById, GetBills, GetStatements } from "../../services/BillServices";
import { GET_BILLS, GET_BILL_BY_ID, GET_STATEMENTS, IS_LOADING } from "../types";

export const LoadBills = () => {
    return async (dispatch) => {
        try {
            const bills = await GetBills()
            dispatch({
                type: GET_BILLS,
                payload: bills
            })
            // console.log(bills)
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

            // console.log(bill)
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
            // console.log(statements)
        } catch (error) {
            throw error
        }
    }
}