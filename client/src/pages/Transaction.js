import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'
import IncomeExpense from '../components/IncomeExpense'
import CreateIncExp from '../components/CreateIncExp'
const Transaction = () => {
  const [transactions, setTransactions] = useState([])
  let [total, setTotal] = useState(0)
  let [expense, setExpense] = useState(0)
  let [income, setIncome] = useState(0)
  let [accountId, setAccountId] = useState()
  let { id } = useParams()

  useEffect(() => {
    const getTransaction = async () => {
      const res = await Client.get(`/api/transactions/${id}`)
      setAccountId(id)
      setTransactions(res.data)
      let balance = 0
      let exp = 0
      let inc = 0
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].type === 'expense') {
          balance -= parseFloat(res.data[i].amount)
          exp += parseFloat(res.data[i].amount)
        } else {
          balance += parseFloat(res.data[i].amount)
          inc += parseFloat(res.data[i].amount)
        }
      }
      setTotal(balance.toFixed(2))
      setExpense(exp.toFixed(2))
      setIncome(inc.toFixed(2))
    }
    getTransaction()
  }, [id])

  const IncExp = transactions.map((transaction) => {
    if (transaction.type === 'expense') {
      return (
        <li className="minus" key={transaction.id}>
          -${transaction.amount}
          <button
            className="delete-btn"
            onClick={async () => {
              const deleteTransaction = parseInt(transaction.id)
              await Client.delete(`/api/transactions/${deleteTransaction}`)
              document.location.reload()
            }}
          >
            x
          </button>
        </li>
      )
    } else {
      return (
        <li className="plus" key={transaction.id}>
          +${transaction.amount}
          <button
            className="delete-btn"
            onClick={async () => {
              const deleteTransaction = parseInt(transaction.id)
              await Client.delete(`/api/transactions/${deleteTransaction}`)
              document.location.reload()
            }}
          >
            x
          </button>
        </li>
      )
    }
  })

  return (
    <div className="container">
      <h4>Your Balance</h4>
      <h2 id="balance">${total}</h2>
      <IncomeExpense
        transactions={transactions}
        income={income}
        expense={expense}
      />
      <h3>History</h3>
      <ul className="list">{IncExp}</ul>
      <CreateIncExp accountId={accountId} />
    </div>
  )
}

export default Transaction
