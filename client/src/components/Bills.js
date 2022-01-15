import React, { useEffect } from "react";
import { connect} from "react-redux";
import { LoadBills } from "../store/actions/BillAction";
import { Link } from 'react-router-dom'


const mapDispatchToProps = (dispatch) => {
    return {
        fetchBills: () => dispatch(LoadBills())
    }
    
}

const mapStateToProps = (state) => {
    return {billState: state.billState }
}


const Home = (props) => {

    useEffect(() => {
        props.fetchBills()
    }, [])

    return (
        <div>
            These are some bills
            {props.billState.bills.map( (e) => (
                <div key={e.bill_id}> 
                    <li>
                        {e.title}
                        {/* <a href={`${e.govtrack_url}`} target='_blank' rel="noreferrer"> more info </a> */}
                        <Link to={`/bills/${e.bill_id}`}> Details </Link>
                    </li>
                </div>
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)