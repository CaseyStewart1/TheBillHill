import React, { useEffect } from "react";
import { connect } from "react-redux";
import { LoadBillById } from "../store/actions/BillAction";
import { useParams } from "react-router-dom";


const mapDispatchToProps = (dispath) => {
    return {
        fetchDetails: (congress) => dispath(LoadBillById(congress))
    }
}

const mapStateToProps = ( state ) => {
    return { billState: state.billState }
}

const Details = (props) => {

    const { id } = useParams()
    const congress = id.substring(0, id.indexOf('-'))

    useEffect(() => {
        props.fetchDetails(congress)
    }, [])

    return (
        <div>
            these are some details
        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Details)