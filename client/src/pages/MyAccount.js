import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'
import { GetAccounts } from '../services/Account'

const MyAccount = ({ user, authenticated }) => {
  const [accounts, setAccounts] = useState([])
  let { id } = useParams()

  useEffect(() => {
    const getAccountByUserId = async () => {
      const res = await Client.get(`/api/accounts/${id}`)
      console.log(res.data, 'this is userId inside of account data')
      setAccounts(res)
    }
    getAccountByUserId()
  }, [id])

  return (
    <div>
      {authenticated && user ? (
        // parseInt(accounts[1].userId) === parseInt(user.id)
        <div className="container">
          {/* {accounts.map((account) => ( */}
          <div className="account-box">
            <h3 className="account-name">{accounts.bankName}</h3>
            <h3 className="account-name">{accounts.accountNumber}</h3>
          </div>
          {/* ))} */}
        </div>
      ) : (
        <div>Please add your account!</div>
      )}
    </div>
  )
}

export default MyAccount
