import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const balance = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, currentValue) => {
      return (acc += currentValue)
    }, 0)

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  )
}

export default Balance
