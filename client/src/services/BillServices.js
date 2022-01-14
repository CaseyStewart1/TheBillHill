
const key = process.env.REACT_APP_KEY
export const GetBills = async => {
    try {
        const response = await axios.get('https://api.propublica.org/congress/v1/117/both/bills/', {
            headers: {
                'X-API-Key': `${key}`
            }
        })
    } catch (error) {
        throw error
    }
}