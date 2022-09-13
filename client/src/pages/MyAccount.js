import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Client from '../services/api'
import CreateAccount from '../components/CreateAccount'
import UpdateAccount from '../components/UpdateAccount'

const MyAccount = ({ user, authenticated }) => {
  const [accounts, setAccounts] = useState([])
  const [trigger, setTrigger] = useState(false)
  const [updateStatus, setUpdateStatus] = useState(false)
  const [accountId, setAccountId] = useState('')

  let { id } = useParams()
  let navigate = useNavigate()

  const viewTransaction = (accounts) => {
    navigate(`/transactions/${accounts.id}`)
  }

  useEffect(() => {
    const getAccountByUserId = async () => {
      const res = await Client.get(`/api/accounts/${user.id}`)
      setAccounts(res.data)
    }
    getAccountByUserId()
  }, [id])

  return (
    <div>
      <button onClick={() => setTrigger(true)}>Add Account</button>
      <div className="container">
        {accounts.map((account) => (
          <div className="account-card" key={account.id}>
            <h3>{account.bankName}</h3>
            <h3>Account #: {account.accountNumber}</h3>
            <h4>Your Balance</h4>
            <h2 id="balance">$0.00</h2>
            <button
              onClick={() => {
                setUpdateStatus(true)
                setAccountId(account.id)
              }}
            >
              Edit
            </button>
            <button
              onClick={async () => {
                let deleted = parseInt(account.id)
                await Client.delete(`/api/accounts/${deleted}`)
                document.location.reload()
              }}
            >
              Delete
            </button>

            <button onClick={() => viewTransaction(account)}>View</button>
          </div>
        ))}
      </div>
      {trigger ? <CreateAccount userId={user.id} /> : ''}
      {updateStatus ? (
        <UpdateAccount userId={user.id} accountId={accountId} />
      ) : (
        ''
      )}
    </div>
  )
}

export default MyAccount
