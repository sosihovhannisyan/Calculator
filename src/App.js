import { React, useState } from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState("")

    const handleClick = (e) => {
        setValue(value.concat(e.target.name))
    }
    const clear = () => {
        setValue('')
    }
    const clearOne = () => {
        setValue(value.slice(0, -1))
    }
    const plusMin = () => {
        setValue((value * -1).toString())
    }
    const handle = () => {
        setValue((value/100).toString())
    }
    const handle1 = (e) => {
        if (!value.includes('.')) {
            setValue(value.concat(e.target.name))
        }
    }
    const calc = () => {
        try {
            setValue(eval(value).toString())
        } catch (err) {
            setValue("Error")
        }
    }

  return (
      <div class="calculator">
          <div class="name">Calculator</div>
          <input type='text' value={value }  disabled='true'></input>
          <div class="buttons">
              <button          onClick={clear }      class="op" >CE</button>
              <button          onClick={clearOne }   class="op">C</button>
              <button name='%' onClick={handle}      class="op">%</button>
              <button name='*' onClick={handleClick} class="op">*</button>
              <button name='7' onClick={handleClick} class="numbers">7</button>
              <button name='8' onClick={handleClick} class="numbers">8</button>
              <button name='9' onClick={handleClick} class="numbers">9</button>
              <button name='/' onClick={handleClick} class="op">/</button>
              <button name='4' onClick={handleClick} class="numbers">4</button>
              <button name='5' onClick={handleClick} class="numbers">5</button>
              <button name='6' onClick={handleClick} class="numbers">6</button>
              <button name='+' onClick={handleClick} class="op">+</button>
              <button name='1' onClick={handleClick} class="numbers">1</button>
              <button name='2' onClick={handleClick} class="numbers">2</button>
              <button name='3' onClick={handleClick} class="numbers">3</button>
              <button name='-' onClick={handleClick} class="op">-</button>
              <button          onClick={plusMin}     class="op">+/-</button>
              <button name='0' onClick={handleClick} class="numbers">0</button>
              <button name='.' onClick={handle1}     class="numbers">.</button>
              <button          onClick={calc}        class="calc">=</button>
          </div>
      </div>
    ); 
}

export default App;
