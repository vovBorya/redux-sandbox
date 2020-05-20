import React from "react";

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

export default Counter