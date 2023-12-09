// Write your code here
import './index.css'

const TransactionItem = props => {
  const {balance, income, expense} = props
  return (
    <ul className="unorder-list-money-item ">
      <li className="cart money-cart1">
        <div className="money-manager-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            className="image"
            alt="balance"
          />
          <div className="balance-cart">
            <p className="money-category">Your Balance</p>
            <p data-testid="balanceAmount" className="balance">
              Rs {income - expense}
            </p>
          </div>
        </div>
      </li>

      <li className="cart money-cart2">
        <div className="money-manager-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            className="image"
            alt="income"
          />
          <div className="balance-cart">
            <p className="money-category">Your Income</p>
            <p data-testid="incomeAmount" className="balance">
              Rs {income}
            </p>
          </div>
        </div>
      </li>

      <li className="cart money-cart3">
        <div className="money-manager-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            className="image"
            alt="expenses"
          />
          <div className="balance-cart">
            <p className="money-category">Your Expenses</p>
            <p data-testid="expensesAmount" className="balance">
              Rs {expense}
            </p>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default TransactionItem
