// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {transaction, deleteTransaction} = props

  const {id, title, amount, optionText} = transaction
  const deleteHistory = () => {
    deleteTransaction(id)
  }

  return (
    <li className="table-column-cart">
      <p className="columns">{title}</p>
      <p className="columns">{amount}</p>
      <p className="columns">{optionText}</p>
      <button
        onClick={deleteHistory}
        data-testid="delete"
        className="delete-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default MoneyDetails
