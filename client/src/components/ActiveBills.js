import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { LoadBills } from '../store/actions/BillAction'
import { Link } from 'react-router-dom'

const mapDispatchToProps = (dispatch ) => {
    return {
        fetchBills: (type) => dispatch(LoadBills(type))
    }
}

const mapStateToProps = (state) => {
    return {
        billState: state.billState
    }
}

const ActiveBill = (props) => {

    const type = 'active'

    useEffect(() => {
        props.fetchBills(type)
    }, [])

    return (
        <div>
            <button onClick={() => {}}>Introduced</button>
            <button onClick={() => {}}>Passed</button>
            Active bills:
            {props.billState.bills.map( (e) => (
                <div key={e.bill_id}> 
                    <li>
                        {e.title}
                        <Link to={`/bills/${e.bill_id}`}> Details </Link>
                    </li>
                </div>
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveBill)