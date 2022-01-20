import { GetUserById, PostUser } from '../../services/BillServices'
import { GET_USER, IS_LOGGEDIN, NEW_USER } from '../types'

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

export const updateNewUser = (newUser) => ({
    type: NEW_USER,
    payload: newUser
})

export const SendNewUser = (form) => {
    return async (dispatch) => {
        try {
            const newUser = await PostUser(form)
            dispatch({
                type: NEW_USER,
                payload: newUser
            })
        } catch (error) {
            throw error
        }
    }
}