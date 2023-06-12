import React from 'react'
import { useState } from 'react'
import { Keypad } from './Keypad'
import "./Calculator.css"


export const Calculator = () => {
  const [displayElement , changeDisplayElement] = useState("");
  
  // function for changing and saving the display element by concatinating its previous val with entered input
  const saveUserInput = (input) => {
    if(displayElement === "Error"){
      return;
    }
    changeDisplayElement(displayElement.concat(input));
    
  }

  // function for reseting the displayElement to NULL after clicking "clear" button
  const clearInputHandler = () => {
    changeDisplayElement("");
  }

  // function for calculating the expression using exception handling
  const calculateHandler = () => {
    try {
      changeDisplayElement(eval(displayElement).toString());      
    } catch (error) {
      changeDisplayElement("Error")
    }
  }

  return (
    <div className='calculator'>
      <div className='display'>{displayElement}</div>
      <Keypad update={saveUserInput} calculate={calculateHandler}/>
      <button className='btn'  onClick={clearInputHandler}>Clear</button>
    </div>
  )
}
