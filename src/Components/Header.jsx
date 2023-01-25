import React from 'react'

export default function Header({income , expenses}) {
  
  const date = new Date()
  const month = date.toLocaleString('en-us', { month: 'long' });
  const year = date.getFullYear()
  
  let incomeArr = []
  let expensesArr = []

  
   income.forEach(element => {
     incomeArr.push(parseInt(element.value))  
  });
   expenses.forEach(element => {
     expensesArr.push(parseInt(element.value))  
  });

  let totalIncome = 0 , totalExpenses = 0
  if (incomeArr.length > 0){
   totalIncome = incomeArr.reduce((a,b)=> a+b)
  }
  if (expensesArr.length > 0){
   totalExpenses = expensesArr.reduce((a,b)=> a+b)
  }
  let budget = totalIncome - totalExpenses

  return (
    <div className='Header'>
      <div className='Budget'>
         Available Budget in {month} {year}: 
      </div>
      <div className='calcBudget'>{budget}</div>
        <div className='Income'>
          <span className='text'>Income</span>
          <span className='value'>{totalIncome}</span>
        </div>
        <div className='Expenses'>
          <span className='text'>Expenses</span>
          <span className='value'>{totalExpenses}</span>
        </div>
    </div>
  )
}
