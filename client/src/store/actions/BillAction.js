import { GetBills } from "../../services/BillServices";
import { GET_BILLS } from "../types";

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