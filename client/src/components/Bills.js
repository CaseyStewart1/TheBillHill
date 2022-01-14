import React, { useEffect } from "react";
import { connect} from "react-redux";
import { LoadBills } from "../store/actions/BillAction";


const mapDispatchToProps = (dispatch) => {
    return {
        fetchBills: () => dispatch(LoadBills())
    }
    
}

const mapStateToProps = (state) => {
    // console.log(state.billState)
    return {billState: state.billState }
}

// console.log(billState)


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
                        <a href={`${e.govtrack_url}`} target='_blank'> more info </a>
                    </li>
                </div>
            ))}
            {/* {console.log(props.billState)} */}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)