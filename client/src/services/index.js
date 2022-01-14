import Axios from 'axios'

const Client = Axios.create({baseURL: 'https://api.propublica.org/congress/v1/117/both/bills/passed.json'})