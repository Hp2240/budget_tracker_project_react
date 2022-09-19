import { useState } from 'react'
import Client from '../services/api'

const CreateAccount = ({ accountId }) => {
  const [newIncExp, setNewIncExp] = useState({
    type: '',
    transactionNumber: NaN,
    amount: '',
    accountId: accountId
  })
  let transactionNum = 0
  const transactionNumSet = new Set()

  const handleChange = (e) => {
    setNewIncExp({ ...newIncExp, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    transactionNumGenerate()
    console.log(transactionNum)
    await Client.post('/api/transactions/', {
      type: newIncExp.type,
      transactionNumber: transactionNum,
      amount: newIncExp.amount,
      accountId: accountId
    })
    document.location.reload()
  }

  const transactionNumGenerate = () => {
    let num = Math.floor(Math.random() * 10000 + 1) + 10000
    while (transactionNumSet.has(num)) {
      num = Math.floor(Math.random() * 10000 + 1) + 10000
    }
    transactionNumSet.add(num)
    transactionNum = num
  }

  return (
    <div className="container">
      <form className="incExp" onSubmit={handleSubmit}>
        <select name="type" id="type" onChange={handleChange}>
          <option disabled>select type</option>
          <option name="expense" id="type">
            expense
          </option>
          <option name="income" id="type">
            income
          </option>
        </select>
        <label htmlFor="type">type</label>
        <input
          onChange={handleChange}
          placeholder="amount"
          type="amount"
          name="amount"
          id="amount"
        />
        <label htmlFor="amount">Amount</label>
        <button>Add</button>
      </form>
    </div>
  )
}
export default CreateAccount
