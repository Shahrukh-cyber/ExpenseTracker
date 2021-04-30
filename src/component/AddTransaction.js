import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
  const { Add } = useContext(GlobalContext)
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const randomkey = new Date().getTime().toString()
  const Additem = (e) => {
    e.preventDefault()
    Add(text, parseInt(amount), randomkey)
    setAmount('')
    setText('')
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            id='text'
            placeholder='Enter text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount
            <br />
            (negative-expense,positive-income)
          </label>
          <input
            type='number'
            id='amount'
            placeholder='Enter amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className='btn' onClick={Additem}>
          Add transaction
        </button>
      </form>
    </>
  )
}

export default AddTransaction
