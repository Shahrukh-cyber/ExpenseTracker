import React from 'react'
import Header from './component/Header'
import Balance from './component/Balance'
import IncomeExpense from './component/IncomeExpense'
import './App.css'
import TransactionList from './component/TransactionList'
import AddTransaction from './component/AddTransaction'
import { GlobalProvider } from './context/GlobalState'
const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />

        <IncomeExpense />

        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
