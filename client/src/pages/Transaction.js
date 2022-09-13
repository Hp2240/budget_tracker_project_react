import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'
import IncomeExpense from '../components/IncomeExpense'

const Transaction = () => {
  const [transactions, setTransactions] = useState([])
  let { id } = useParams()

  useEffect(() => {
    const getTransaction = async () => {
      const res = await Client.get(`/api/transactions/${id}`)
      console.log(res.data, 'this is transactions')
      setTransactions(res.data)
    }
    getTransaction()
  }, [id])

  return (
    <div className="container">
      <h4>Your Balance</h4>
      <h2 id="balance">$0.00</h2>
      <IncomeExpense />
      <h3>History</h3>
      <ul className="list">
        <li className="minus">
          Cash <span>-$400</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </div>
  )
}

export default Transaction
