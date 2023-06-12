import React from 'react'
import "./Keypad.css"


export const Keypad = (props) => {
  
  // function for passing the value of button clicked by user to add in our display
  const  setInputHandler = (event) =>{
    const input = event.target.name;
    props.update(input);
  }

  // function for calling the calculate function in parent component after clicking "="
  const equals = () =>{
    props.calculate();
  }
  
  return (
    <div>
      <ul className='grid keys'>
        <button name='7' onClick={setInputHandler}>7</button>
        <button name='8' onClick={setInputHandler}>8</button>
        <button name='9' onClick={setInputHandler}>9</button>
        <button name='+' onClick={setInputHandler}>+</button>
        <button name='4' onClick={setInputHandler}>4</button>
        <button name='5' onClick={setInputHandler}>5</button>
        <button name='6' onClick={setInputHandler}>6</button>
        <button name='-' onClick={setInputHandler}>-</button>
        <button name='1' onClick={setInputHandler}>1</button>
        <button name='2' onClick={setInputHandler}>2</button>
        <button name='3' onClick={setInputHandler}>3</button>
        <button name='*' onClick={setInputHandler}>*</button>
        <button name='0' onClick={setInputHandler}>0</button>
        <button name='.' onClick={setInputHandler}>.</button>
        <button name='=' onClick={equals}>=</button>
        <button name='/' onClick={setInputHandler}>/</button>
      </ul>
    </div>
  )
}
