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
    }, [congress])


    return (
        <div>
            { props.billState.isLoading ? <p> loading </p> : <div> {props.billState.bill.map( (e) => (
                <div key={e.bill_id}> 
                    {e.title}
                    <a href={`${e.govtrack_url}`} target={`_blank`} rel="noreferred"> <span className="span-details">more details</span> </a>
                </div>
            ))} </div>}
        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Details)