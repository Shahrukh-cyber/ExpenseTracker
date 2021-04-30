import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext)
  console.log('tr', transactions)
  const income = transactions
    .map((transaction) => transaction.amount)
    .filter((amount) => amount > 0)
    .reduce((acc, currentValue) => {
      return (acc += currentValue)
    }, 0)
    .toFixed(2)
  // console.log(income)
  const expense = (
    transactions
      .map((transaction) => transaction.amount)
      .filter((amount) => amount < 0)
      .reduce((acc, currentValue) => {
        return (acc += currentValue)
      }, 0) * -1
  ).toFixed(2)
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>${expense}</p>
      </div>
    </div>
  )
}

export default IncomeExpense
