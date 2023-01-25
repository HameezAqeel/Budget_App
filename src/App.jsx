import Header from './Components/Header'
import InputBoxes from './Components/InputBoxes'
import Details from './Components/Details'
import './App.css'
import { useState } from 'react'

function App() {
     const [data,setData] = useState([])

     let income=[],expenses=[];

     data.forEach(element => {
       if (element.state == "+"){
         income.push(element)
       }
       else if (element.state == "-"){
         expenses.push(element)
       }
     });

  return (
    <>
    <Header income={income} expenses={expenses}/>
    <InputBoxes setData={setData}/>
    <Details  income={income} expenses={expenses}/>
    </>
  )
}

export default App
