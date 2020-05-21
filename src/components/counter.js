import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from "../actions";

const Counter = ({counter, inc, dec, rnd}) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button
        className="btn btn-primary btn-lg"
        onClick={inc}
      >INC</button>
      <button
        className="btn btn-secondary btn-lg"
        onClick={rnd}
      >INC random</button>
      <button
        className="btn btn-danger btn-lg"
        onClick={dec}
      >DEC</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

const mapDispatchToProps = (dispatch) => {

  const { inc, dec, rnd } = bindActionCreators(actions, dispatch)

  return {
    inc,
    dec,
    rnd: () => rnd(Math.floor(Math.random() * 10 + 1))
  }
}

export default connect(
                  mapStateToProps,
                  mapDispatchToProps
               )(Counter)