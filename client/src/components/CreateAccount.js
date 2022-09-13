import { useState } from 'react'
import Client from '../services/api'

const CreateAccount = ({ userId }) => {
  const [newAccount, setNewAccount] = useState({
    bankName: '',
    accountNumber: '',
    userId: userId
  })

  const handleChange = (e) => {
    setNewAccount({ ...newAccount, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post('/api/accounts/', {
      bankName: newAccount.bankName,
      accountNumber: newAccount.accountNumber,
      userId: userId
    })
    document.location.reload()
  }
  console.log(newAccount.bankName)
  console.log(newAccount.accountNumber)
  console.log(userId)

  return (
    <div className="container">
      <form className="accounts" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="Bank Name"
          type="bankName"
          name="bankName"
          id="bankName"
        />
        <label htmlFor="bankName">Bank Name</label>
        <input
          onChange={handleChange}
          placeholder="Account Number"
          type="accountNumber"
          name="accountNumber"
          id="accountNumber"
        />
        <label htmlFor="bankName">Account Number</label>
        <button>Add</button>
      </form>
    </div>
  )
}
export default CreateAccount
