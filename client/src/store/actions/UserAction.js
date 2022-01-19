import { GetUserById } from '../../services/BillServices'
import { GET_USER, IS_LOGGEDIN } from '../types'

export const LogIn = () => ({
    type: IS_LOGGEDIN,
    payload: true
})

export const LoadUser = () => {
    return async (dispatch) => {
        try {
            const user = await GetUserById()
            dispatch({
                type: GET_USER,
                payload: user
            })
        } catch (error) {
            throw error
        }
    }
}