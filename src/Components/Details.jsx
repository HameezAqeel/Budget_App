import React from 'react'

export default function Details({income , expenses}) {
  
 income = JSON.parse(JSON.stringify(income))
 expenses = JSON.parse(JSON.stringify(expenses))

let incomeDetails = income.map(inc =>(<tr key={income.indexOf(inc)} className='detailLine'><td className='left'>{inc.description}</td><td style={{color:'green'}} className='right'>+{inc.value}</td></tr>))

let expensesDetails = expenses.map(exp =>(<tr key={expenses.indexOf(exp)} className='detailLine'><td className='left'>{exp.description}</td><td style={{color: 'red'}} className='right'>-{exp.value}</td></tr>))

  return (
    <div className='BudgetDetails'>
       <div className='IncomeDetails'>
        <div style={{color: 'green'}}>Income</div>
        <table>
          <tbody>
        {incomeDetails}
          </tbody>
        </table>
       </div>
       <div className='ExpensesDetails'>
        <div style={{color:'red'}}>Expenses</div>
        <table>
          <tbody>
          {expensesDetails}
          </tbody>
        </table>
       </div>
    </div>
  )
}
