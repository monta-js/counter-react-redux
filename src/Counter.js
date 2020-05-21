import React from 'react';
import { connect } from 'react-redux';

const Counter = props => {
  const  increment = () => {
        props.dispatch({type:"INCREMENT"});
    }
  const  decrement = () => {
        props.dispatch({type:"DECREMENT"});
    }
    return (
    <div className="container">
  <div className="row  justify-content-center">
    <div className="col-4 ">
        <div className="row justify-content-center">
        <h2>Counter</h2>
        </div>
            <div className="row justify-content-center">
                <button type="button" class="btn btn-secondary mr-5" onClick = {decrement} >-</button>
                <span className="count mr-5">{props.count}</span>
                <button type="button" class="btn btn-secondary" onClick = {increment}>+</button>
            </div>
    </div>
  </div>
</div>
    )
   
}
const mapStateToProps = state => ({
    count : state.count
}); 
export default connect(mapStateToProps)(Counter)
