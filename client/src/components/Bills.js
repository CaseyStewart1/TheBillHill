import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  LoadBills,
  LoadActiveBills,
  LoadPassedBills
} from '../store/actions/BillAction';
import { Link } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBills: () => dispatch(LoadBills()),
    fetchActiveBills: () => dispatch(LoadActiveBills()),
    fetchPassedBills: () => dispatch(LoadPassedBills())
  };
};

const mapStateToProps = (state) => {
  return {
    billState: state.billState
  };
};

const Bill = (props) => {
  const [render, updateRender] = useState(0);

  useEffect(() => {
    props.fetchBills();
    props.fetchActiveBills();
    props.fetchPassedBills();
  }, []);

  return (
    <div>
      {render === 0 ? (
        <div>
          <button onClick={() => updateRender(1)}>Active</button>{' '}
          <button onClick={() => updateRender(2)}>Passed</button>
        </div>
      ) : null}
      {render === 1 ? (
        <div>
          <button onClick={() => updateRender(0)}>Introduced</button>{' '}
          <button onClick={() => updateRender(2)}>Passed</button>
        </div>
      ) : null}
      {render === 2 ? (
        <div>

          <button onClick={() => updateRender(1)}>Active</button>{' '}
          <button onClick={() => updateRender(0)}>Introduced</button>
        </div>
      ) : null}

      {render === 0 ? (
        <div>
          Introduced bills:
          {props.billState.bills.map((e) => (
            <div key={e.bill_id}>
              <li>
                {e.title}
                <Link to={`/bills/${e.bill_id}`}> Details </Link>
              </li>
            </div>
          ))}
        </div>
      ) : null}

      {render === 1 ? (
        <div>
          Active bills:
          {props.billState.activeBills.map((e) => (
            <div key={e.bill_id}>
              <li>
                {e.title}
                <Link to={`/bills/${e.bill_id}`}> Details </Link>
              </li>
            </div>
          ))}
        </div>
      ) : null}


      {render === 2 ? (
        <div>
          Passed bills:
          {props.billState.passedBills.map((e) => (
            <div key={e.bill_id}>
              <li>
                {e.title}
                <Link to={`/bills/${e.bill_id}`}> Details </Link>
              </li>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Bill);
