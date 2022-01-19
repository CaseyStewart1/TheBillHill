import axios from 'axios'
import Client from '.'

// const key = process.env.REACT_APP_API_KEY
// console.log(key)
export const GetBills = async () => {
    try {
        const response = await axios.get(`https://api.propublica.org/congress/v1/117/both/bills/introduced.json`, {
            headers: {
                'X-API-Key': `Q2vP0osGpYnRKlCzFe7stoMYp8n88Yv5bwP1ZUwU`
            }
        })
        return response.data.results[0].bills
    } catch (error) {
        throw error
    }
}

export const GetActiveBills = async () => {
    try {
        const response = await axios.get(`https://api.propublica.org/congress/v1/117/both/bills/active.json`, {
            headers: {
                'X-API-Key': `Q2vP0osGpYnRKlCzFe7stoMYp8n88Yv5bwP1ZUwU`
            }
        })
        return response.data.results[0].bills
    } catch (error) {
        throw error
    }
}

export const GetPassedBills = async () => {
    try {
        const response = await axios.get(`https://api.propublica.org/congress/v1/117/both/bills/passed.json`, {
            headers: {
                'X-API-Key': `Q2vP0osGpYnRKlCzFe7stoMYp8n88Yv5bwP1ZUwU`
            }
        })
        return response.data.results[0].bills
    } catch (error) {
        throw error
    }
}

export const GetBillById = async (billId) => {
    try {
        const response = await axios.get(`https://api.propublica.org/congress/v1/117/bills/${billId}.json`, {
            headers: {
                'X-API-Key': `Q2vP0osGpYnRKlCzFe7stoMYp8n88Yv5bwP1ZUwU`
            }
        })
        // console.log(billId)
        return response.data.results
    } catch (error) {
        throw error
    }
}

export const GetStatements = async () => {
    try {
        const response = await axios.get(`https://api.propublica.org/congress/v1/statements/latest.json`, {
            headers: {
                'X-API-Key': `Q2vP0osGpYnRKlCzFe7stoMYp8n88Yv5bwP1ZUwU`
            }
        })
        // console.log(response)
        return response.data.results
    } catch (error) {
        throw error
    }
}

export const GetUserById = async () => {
    try {
        const response = await Client.get(`/users/`)
        return response.data
    } catch (error) {
        throw error
    }
}