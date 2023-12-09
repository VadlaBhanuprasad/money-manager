import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    yourBalance: 0,
    yourIncome: 0,
    yourExpenses: 0,
    transactionList: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  selectCategory = event => {
    this.setState({type: event.target.value})
  }

  addAmount = event => {
    event.preventDefault()
    const {
      yourBalance,
      yourExpenses,
      yourIncome,
      title,
      amount,
      type,
      transactionList,
    } = this.state

    if (title !== '' && amount !== '' && type !== '') {
      if (type === 'EXPENSES') {
        this.setState(prevState => ({
          yourExpenses: prevState.yourExpenses + parseInt(amount),
          yourBalance: prevState.yourBalance - parseInt(amount),
          type: 'Expenses',
        }))
      } else {
        this.setState(prevState => ({
          yourIncome: prevState.yourIncome + parseInt(amount),
          yourBalance: prevState.yourBalance + parseInt(amount),
          type: 'Income',
        }))
      }
      const findDisplayText = transactionTypeOptions.find(
        eachItem => eachItem.optionId === type,
      )
      const {displayText} = findDisplayText
      const newAmountDetails = {
        id: uuidv4(),
        title,
        amount: parseInt(amount),
        optionText: displayText,
      }

      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, newAmountDetails],
        yourBalance: yourIncome - yourExpenses,
        title: '',
        type: '',
        amount: '',
      }))
    }
  }

  onDeleteTransaction = id => {
    const {transactionList} = this.state
    const filterAfterDelete = transactionList.filter(
      eachItem => eachItem.id !== id,
    )
    const findDeleted = transactionList.find(each => each.id === id)
    const {amount, optionText} = findDeleted

    if (optionText === 'Income') {
      this.setState(prevState => ({yourIncome: prevState.yourIncome - amount}))
    } else {
      this.setState(prevState => ({
        yourExpenses: prevState.yourExpenses - amount,
      }))
    }
    this.setState({transactionList: filterAfterDelete})
  }

  render() {
    const {
      title,
      amount,
      transactionList,
      yourBalance,
      yourExpenses,
      yourIncome,
      type,
    } = this.state
    return (
      <div className="container">
        <div className="money-manager-cart">
          <div>
            <div className="profile-section">
              <h1 className="user-name">Hi, Richard</h1>
              <p className="welcome-to-mm">
                Welcome back to your
                <span className="money-manager"> Money Manager</span>
              </p>
            </div>

            <TransactionItem
              balance={yourBalance}
              expense={yourExpenses}
              income={yourIncome}
            />

            <div className="money-input-manager">
              <form onSubmit={this.addAmount} className="input-elements-cart">
                <h1 className="add-transaction">Add Transaction</h1>
                <label className="label-text" htmlFor="label-text">
                  TITLE
                </label>
                <br />
                <input
                  value={title}
                  placeholder="TITLE"
                  className="input-element"
                  type="text"
                  id="label-text"
                  onChange={this.onChangeTitle}
                />
                <label className="label-text" htmlFor="label-text">
                  AMOUNT
                </label>
                <br />
                <input
                  value={amount}
                  placeholder="TITLE"
                  className="input-element"
                  type="text"
                  id="label-text"
                  onChange={this.onChangeAmount}
                />
                <label className="label-text" htmlFor="label-text">
                  TYPE
                </label>
                <br />
                <select
                  id="select"
                  onChange={this.selectCategory}
                  className="input-element"
                  htmlFor="label-text"
                >
                  {transactionTypeOptions.map(eachItem => (
                    <option value={eachItem.optionId} key={eachItem.optionId}>
                      {eachItem.displayText}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  onClick={this.addAmount}
                  className="add-button"
                >
                  Add
                </button>
              </form>

              <div className="history-container">
                <h1 className="add-transaction">History</h1>
                <ul className="money-details-cart">
                  <li className="table-column">
                    <p className="column">Title</p>
                    <p className="column">Amount</p>
                    <p className="column">Type</p>
                  </li>
                  {transactionList.map(eachItem => (
                    <MoneyDetails
                      deleteTransaction={this.onDeleteTransaction}
                      key={eachItem.id}
                      transaction={eachItem}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
