import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'
import IncomeExpense from '../components/IncomeExpense'

const Transaction = () => {
  const [transactions, setTransactions] = useState([])
  let [total, setTotal] = useState(0)
  let [expense, setExpense] = useState(0)
  let [income, setIncome] = useState(0)
  let { id } = useParams()

  useEffect(() => {
    const getTransaction = async () => {
      const res = await Client.get(`/api/transactions/${id}`)
      console.log(res.data, 'this is transactions')
      setTransactions(res.data)
      let balance = 0
      let exp = 0
      let inc = 0
      for (let i = 0; i < res.data.length; i++) {
        console.log(res.data[i].type)
        if (res.data[i].type === 'expense') {
          balance -= parseFloat(res.data[i].amount)
          exp += parseFloat(res.data[i].amount)
        } else {
          balance += parseFloat(res.data[i].amount)
          inc += parseFloat(res.data[i].amount)
        }
      }
      setTotal(balance)
      setExpense(exp)
      setIncome(inc)
    }
    getTransaction()
  }, [id])

  const IncExp = transactions.map((transaction) => {
    if (transaction.type === 'expense') {
      return (
        <li className="minus" key={transaction.id}>
          -${transaction.amount}
          <button className="delete-btn">x</button>
        </li>
      )
    } else if (transaction.type === 'income') {
      return (
        <li className="plus" key={transaction.id}>
          +${transaction.amount}
          <button className="delete-btn">x</button>
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
    </div>
  )
}

export default Transaction
