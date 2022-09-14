import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'
import IncomeExpense from '../components/IncomeExpense'

const Transaction = () => {
  const [transactions, setTransactions] = useState([])
  const [expense, setExpense] = useState('')
  let { id } = useParams()

  useEffect(() => {
    const getTransaction = async () => {
      const res = await Client.get(`/api/transactions/${id}`)
      console.log(res.data, 'this is transactions')
      setTransactions(res.data)
    }
    getTransaction()
  }, [id])

  // balance = income - expense
  const IncExp = transactions.map((transaction) => {
    let balance = 0
    if (transaction.type === 'expense') {
      balance = balance - parseInt(transaction.amount)
      return (
        <li className="minus">
          -${transaction.amount}
          <button className="delete-btn">x</button>
        </li>
      )
    } else if (transaction.type === 'income') {
      balance = balance + parseInt(transaction.amount)
      return (
        <li className="plus">
          +${transaction.amount}
          <button className="delete-btn">x</button>
        </li>
      )
    }
  })

  return (
    <div cssName="container">
      <h4>Your Balance</h4>
      <h2 id="balance">$0.00</h2>
      <IncomeExpense />
      <h3>History</h3>
      <ul className="list">{IncExp}</ul>
    </div>
  )
}

export default Transaction
