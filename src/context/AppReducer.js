export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {
            id: action.payload.id,
            amount: action.payload.amount,
            text: action.payload.text,
          },
        ],
      }
    case 'DELETE_ITEM':
      const newItem = [
        ...state.transactions.filter(
          (transaction) => transaction.id != action.payload
        ),
      ]
      return {
        ...state,
        transactions: newItem,
      }
    default:
      return state
  }
}
