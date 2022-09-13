import { useState } from 'react'
import Client from '../services/api'

const UpdateAccount = ({ userId, accountId }) => {
  const [updateAccount, setUpdateAccount] = useState({
    bankName: '',
    accountNumber: ''
  })

  const handleChangeUpdate = (e) => {
    setUpdateAccount({ ...updateAccount, [e.target.name]: e.target.value })
  }

  console.log(accountId, 'this is account id')
  const handleSubmitUpdate = async (e) => {
    e.preventDefault()
    await Client.put(`/api/accounts/${accountId}`, {
      bankName: updateAccount.bankName,
      accountNumber: updateAccount.accountNumber,
      id: accountId,
      userId: userId
    })
    document.location.reload()
  }

  return (
    <div className="container">
      <form className="accounts">
        <input
          onChange={handleChangeUpdate}
          placeholder="Bank Name"
          type="bankName"
          name="bankName"
          id="bankName"
        />
        <label htmlFor="bankName">Bank Name</label>
        <input
          onChange={handleChangeUpdate}
          placeholder="Account Number"
          type="accountNumber"
          name="accountNumber"
          id="accountNumber"
        />
        <label htmlFor="bankName">Account Number</label>
        <button onClick={handleSubmitUpdate}>Submit Update</button>
      </form>
    </div>
  )
}

export default UpdateAccount
