import React from "react";

const OperatorButton = (props) => {
  function handleChange() {
    if (props.symbol !== '=') {
      return props.setDisplayResult([...props.displayResult, props.value])
    }
    else return props.setDisplayResult([eval(props.displayResult.join(''))])
  }
  return (
    <div className="operator-button" onClick={() => handleChange()}>{props.symbol}</div>
  );
};

export default OperatorButton;