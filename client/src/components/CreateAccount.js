import { useState } from 'react'
import Client from '../services/api'

const CreateAccount = (props) => {
  const [newAccount, setNewAccount] = useState({
    bankName: '',
    accountNumber: ''
  })

  const handleChange = (e) => {
    setNewAccount({ ...newAccount, [e.target.neme]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post('/api/accounts/', {
      bankName: newAccount.bankName,
      accountNumber: newAccount.accountNumber,
      userId: props.user.id
    })
    document.location.reload()
  }

  return props.trigger ? (
    <div className="container">
      <form className="accounts" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="Bank"
          type="bankName"
          name="bankName"
          id="bankName"
        />
        <label htmlFor="bankName">Bank</label>
        <input
          onChange={handleChange}
          placeholder="Account Number"
          type="accountNumber"
          name="accountNumber"
          id="accountNumber"
        />
        <label htmlFor="bankName">Account Number</label>
      </form>
    </div>
  ) : (
    ''
  )
}
export default CreateAccount
