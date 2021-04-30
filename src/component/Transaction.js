import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
export const Transaction = ({ transaction }) => {
  const { Delete } = useContext(GlobalContext)
  const sign = transaction.amount < 0 ? 'minus' : 'plus'

  const deleteitem = (id) => {
    console.log('id=>', id)
    Delete(id)
  }
  return (
    <li className={sign}>
      {transaction.text}{' '}
      <span>
        {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}
      </span>
      <button className='delete-btn' onClick={() => deleteitem(transaction.id)}>
        x
      </button>
    </li>
  )
}
