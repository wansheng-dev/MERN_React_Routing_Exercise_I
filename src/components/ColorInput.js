import React from 'react';

const ColorInput = props =>{
  const style = {
    color: props.color,
    background: props.bgcolor,
  }


  if (isNaN(+props.input) === false){
    return (
      <h1 style={style}> The number is: {props.input} </h1>
    ) 
  } else {
    return (
      <h1 style={style}> The word is: {props.input} </h1>
    )
  }
}

export default ColorInput;