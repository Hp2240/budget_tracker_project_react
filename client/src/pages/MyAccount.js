import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'
import { GetAccounts } from '../services/Account'
import CreateAccount from '../components/CreateAccount'
import IncomeExpense from '../components/IncomeExpense'

const MyAccount = ({ user, authenticated }) => {
  const [accounts, setAccounts] = useState([])
  // const [newAccount, setNewAccount] = useState({
  //   bankName: '',
  //   accountNumber: ''
  // })
  const [trigger, setTrigger] = useState(false)
  let { id } = useParams()

  // const handleChange = (e) => {
  //   setNewAccount({ ...newAccount, [e.target.neme]: e.target.value })
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   await Client.post('/api/accounts/', {
  //     bankName: newAccount.bankName,
  //     accountNumber: newAccount.accountNumber,
  //     userId: user.id
  //   })
  //   document.location.reload()
  // }

  useEffect(() => {
    const getAccountByUserId = async () => {
      console.log('this is myAccount ', id)
      const res = await Client.get(`/api/accounts/${id}`)
      console.log(res.data, 'this is userId inside of account data')
      setAccounts(res.data)
    }
    getAccountByUserId()
  }, [id])

  return (
    <div className="container">
      {accounts.map((account) => (
        <div className="account-box">
          <h3>Name: {account.User.userName}</h3>
          <h3>Bank: {account.bankName}</h3>
          <h3>Account #: {account.accountNumber}</h3>
          <h4>Your Balance</h4>
          <h2 id="balance">$0.00</h2>
        </div>
      ))}
      <button onClick={() => setTrigger(true)}>Add Account</button>
      {trigger ? <CreateAccount userId={user.id} /> : ''}
    </div>
  )
}

export default MyAccount
