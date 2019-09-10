import React from "react";

const SpecialButton = (props) => {
  function handleChange () {
    if (props.symbol === 'C') return props.setDisplayResult([])
    if (props.symbol === '+/-' && props.displayResult[0] !== '-') return props.setDisplayResult(['-', ...props.displayResult])
    if (props.symbol === '+/-' && props.displayResult[0] === '-') return props.setDisplayResult(props.displayResult.slice(1, props.displayResult.length))
  }
  return (
    <div className='special-button' onClick={() => handleChange()}>{props.symbol}</div>
  );
};

export default SpecialButton;