import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { LoadBills, LoadActiveBills, LoadPassedBills } from "../store/actions/BillAction";
import { Link } from 'react-router-dom'


const mapDispatchToProps = (dispatch) => {
    return {
        fetchBills: () => dispatch(LoadBills()),
        fetchActiveBills: () => dispatch(LoadActiveBills()),
        fetchPassedBills: () => dispatch(LoadPassedBills())
    }
    
}

const mapStateToProps = (state) => {
    return {
        billState: state.billState 
    }
}


const Bill = (props) => {

    const [render, updateRender] = useState(0)

    useEffect(() => {
        props.fetchBills()
        props.fetchActiveBills()
        props.fetchPassedBills()
    }, [])

    return (
        <div className="bill-body">
            {render === 0 ? 
                <div>
                    <button onClick={() => updateRender(1)}>Active Bills</button> <button onClick={() => updateRender(2)}>Passed Bils</button> 
                </div> : null}
            {render === 1 ? 
                <div>
                    <button onClick={() => updateRender(0)}>Introduced Bills</button> <button onClick={() => updateRender(2)}>Passed Bills</button> 
                </div> : null}
            {render === 2 ? 
                <div>
                    <button onClick={() => updateRender(1)}>Active Bills</button> <button onClick={() => updateRender(0)}>Introduced Bills</button> 
                </div> : null}
                
            {render === 0 ? <div>
                <h4>Introduced bills:</h4>
                {props.billState.bills.map( (e) => (
                    <div key={e.bill_id} className="bills"> 
                        <li>
                            {e.title}
                            <Link to={`/bills/${e.bill_id}`}> <span className="span-details">more details</span> </Link>
                        </li>
                    </div>
                ))}
            </div> : null}

            {render === 1 ? <div>
                <h4>Active bills:</h4>
                {props.billState.activeBills.map( (e) => (
                    <div key={e.bill_id} className="bills"> 
                        <li>
                            {e.title}
                            <Link to={`/bills/${e.bill_id}`}> <span className="span-details">more details</span> </Link>
                        </li>
                    </div>
                ))}
            </div> : null}

            {render === 2 ? <div>
                <h4>Passed bills:</h4>
                {props.billState.passedBills.map( (e) => (
                    <div key={e.bill_id} className="bills"> 
                        <li>
                            {e.title}
                            <Link to={`/bills/${e.bill_id}`}> <span className="span-details">more details</span> </Link>
                        </li>
                    </div>
                ))}
            </div> : null}

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Bill)