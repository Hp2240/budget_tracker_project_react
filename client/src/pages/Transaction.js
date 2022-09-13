import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'

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
  return <div>this is transaction page!!!!!!!!!!!!!!!!!!!!</div>
}

export default Transaction
