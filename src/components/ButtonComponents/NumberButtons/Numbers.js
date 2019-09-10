import React, {useState} from "react";

//import any components needed

//Import your array data to from the provided data file
import {numbers} from '../../../data.js'
import NumberButton from "./NumberButton.js";

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberState] = useState(numbers)
  return (
    <div className='numbersContainer'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numberState.map((number, indx) => {
         return indx !== 9 
         ? <NumberButton 
              key={indx} 
              symbol={number}
              setDisplayResult={props.setDisplayResult}
              displayResult={props.displayResult} /> 
         : <NumberButton 
              key={indx} 
              symbol={number} 
              name='zeroNum' 
              setDisplayResult={props.setDisplayResult}
              displayResult={props.displayResult} /> 
       })}
    </div>
  );
};

export default Numbers;