import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'
import { GetAccounts } from '../services/Account'
import CreateAccount from '../components/CreateAccount'
import IncomeExpense from '../components/IncomeExpense'

const MyAccount = ({ user, authenticated }) => {
  const [accounts, setAccounts] = useState([])
  const [trigger, setTrigger] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const getAccountByUserId = async () => {
      const res = await Client.get(`/api/accounts/${id}`)
      console.log(res.data, 'this is userId inside of account data')
      setAccounts(res.data)
    }
    getAccountByUserId()
  }, [id])

  return (
    <div>
      <button onClick={() => setTrigger(true)}>Add Account</button>
      <div className="container">
        {accounts.map((account) => (
          <div className="account-card">
            <h3>{account.bankName}</h3>
            <h3>Account #: {account.accountNumber}</h3>
            <h4>Your Balance</h4>
            <h2 id="balance">$0.00</h2>
            <button>Edit</button>
            <button
              onClick={async () => {
                let deleted = parseInt(account.id)
                await Client.delete(`/api/accounts/${deleted}`)
                document.location.reload()
              }}
            >
              Delete
            </button>
          </div>
        ))}
        {trigger ? <CreateAccount userId={user.id} /> : ''}
      </div>
    </div>
  )
}

export default MyAccount
