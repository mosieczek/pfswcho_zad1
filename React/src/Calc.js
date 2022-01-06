import React from 'react'
import {useState} from 'react'
import axios from 'axios'

export default function Calc() {
    const [value, setValue] = useState(0)
    const [result, setResult] = useState(0)
    document.title = "Fib Cal"
    function count(){

      const baseUrl = `http://localhost:8080/fib/oblicz/${value}`


      axios.get(baseUrl,{})
      .then((response) => {
        setResult(response.data);
      })
      
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
          K-ty element ciagu Fibonacciego: {result.val}
          
          <button onClick={history}>Historia</button>

        </header>
      </div>
        
    )
}