import React from 'react'
import {useState} from 'react'
import axios from 'axios'

export default function Calc() {
    const [value, setValue] = useState(0)
    const [result, setResult] = useState(0)
    const [historyRes, setHistoryRes] = useState([])
    const [showHistory, setShowHistory] = useState(false)

    document.title = "Fib Cal"
    function count(){

      const baseUrl = `http://localhost:8080/fib/oblicz/${value}`

      axios.post(baseUrl,{})
      .then((response) => {
        setResult(response.data);
      })
      
    }

    function history(){
      const baseUrl = `http://localhost:8080/fib/history`

      axios.get(baseUrl,{})
      .then((response) => {
        setHistoryRes(response.data.content);
      })
      setShowHistory(!showHistory)
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

              {showHistory?(<div>
                <h3>Historia obliczeń</h3>
                <table border = "1">
                  <thead>
                    <tr>
                      <th>Wprowadzona wartość</th>
                      <th>Wynik</th>
                    </tr>
                  </thead>
                  <tbody>
                  {historyRes.map((item) => 
                    <tr>
                      <td>{item.inputedValue}</td>
                      <td>{item.result}</td>
                    </tr>
                )}
                      </tbody>
                </table>
              </div>):(<div></div>)}
            
          
          
        </header>
      </div>
        
    )
}