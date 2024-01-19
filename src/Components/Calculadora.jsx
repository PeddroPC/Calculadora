import React, { useState } from 'react'
import "./Calculadora.css"

const Calculadora = () => {

    const buttons = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/']

    const [calc, setCalc] = useState("");

    const handleCalc = (value) => {
        if(value == "="){
            try{
                setCalc(eval(calc).toString())
            } catch(error){
                setCalc("Error")
            }
        }if(value == "C"){
            setCalc("")
        } else{
            setCalc((prevCalc) => prevCalc + value);
        }
    }

  return (
    <div className='card-container'>
        <div className='display'>
            <textarea
            value={calc}
            onChange={(e) => setCalc(e.target.value)}/>
        </div>
        <div className='buttons'>
            {
                buttons.map((button, index) => (
                    <input key={index} type='button' value={button} onClick={() => handleCalc(button)}/>
                ))
            }
        </div>
    </div>
  )
}

export default Calculadora