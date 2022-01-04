import React from 'react'
import {useState} from 'react'

export default function Calc() {
    const [value, setValue] = useState(0)
    const [result, setResult] = useState(0)
    document.title = "Fib Cal"
    function count(){
      if(value > 0 && value <= 20){
        setResult(0)
        if(parseInt(value) === 1 || parseInt(value) === 2){
          setResult(1)
        }
        else{
          let firstVal = 1, secondVal = 1, tempRes 
          for(let i = 2; i < value; i++){
            tempRes = firstVal + secondVal
            firstVal = secondVal
            secondVal = tempRes
            setResult(tempRes)
          }
        }
      }else{
        setResult("Podano zla wartosc K")
      }
    }

    function history(){
      console.log("historia")
    }
    return(
        <div className="App">
            <h1>Kalkulator Fibonacciego</h1>
        <header className="App-header">
          <label for='inputValue'>Podaj liczbe naturalna K:</label>
          <input id='inputValue' onChange={(e) => {setValue(e.target.value)}} type='text'/>
          <br/>
          <button onClick={count}>Oblicz</button>
          K-ty element ciagu Fibonacciego: {result}
          
          <button onClick={history}>Historia</button>

        </header>
      </div>
        
    )
}