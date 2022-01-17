import React, { useEffect } from "react";
import {connect} from 'react-redux'
import { LoadStatements } from "../store/actions/BillAction"


const mapDispatchToProps = (dispatch) => {
    return {
        fetchStatements: () => dispatch(LoadStatements())
    }
}

const mapStateToProps = ( state ) => {
    return {
        statementState: state.statementState
    }
}


const Home = (props) => {

    useEffect(() => {
        props.fetchStatements()
    }, [])


    return (
        <div>
            {props.statementState.statements.map( (e,e2) => (
                <div key={e2}>
                    {e.title}
                    <a href={`${e.url}`} target={`_blank`} rel="noreferred"> more details </a>
                </div>
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)