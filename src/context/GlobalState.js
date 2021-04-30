import React, { createContext, useContext, useReducer } from 'react'
import { AppReducer } from './AppReducer'
//Initial State

const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 },
  ],
}

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  const Add = (text, amount, id) => {
    dispatch({ type: 'ADD_ITEM', payload: { text, amount, id } })
  }

  const Delete = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: id })
  }
  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, Add, Delete }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
