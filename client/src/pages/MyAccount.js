import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Client from '../services/api'
import CreateAccount from '../components/CreateAccount'

const MyAccount = ({ user, authenticated }) => {
  const [accounts, setAccounts] = useState([])
  const [trigger, setTrigger] = useState(false)
  // const [updateAccount, setUpdateAccount] = useState({
  //   bankName: '',
  //   accountNumber: '',
  //   id: ''
  // })
  // const [updateStatus, setUpdateStatus] = useState(false)

  let { id } = useParams()
  let navigate = useNavigate()

  // const handleChangeUpdate = (e) => {
  //   setUpdateAccount({ ...updateAccount, [e.target.name]: e.target.value })
  // }

  // const handleSubmitUpdate = async (e) => {
  //   e.preventDefault()
  //   await Client.put(`/api/accounts/${updateAccount.id}`, {
  //     bankName: updateAccount.bankName,
  //     accountNumber: updateAccount.accountNumber
  //   })
  //   document.location.reload()
  // }

  const viewTransaction = (accounts) => {
    navigate(`/transactions/${accounts.id}`)
  }
  useEffect(() => {
    const getAccountByUserId = async () => {
      const res = await Client.get(`/api/accounts/${user.id}`)
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

            <button
            // onClick={() => {
            //   setUpdateAccount(true)
            //   setUpdateAccount({
            //     bankName: account.bankName,
            //     accountNumber: account.accountNumber
            //   })
            // }}
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
    </div>
  )
}

export default MyAccount
