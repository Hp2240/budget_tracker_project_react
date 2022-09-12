import Client from './api'

export const GetAccounts = async () => {
  try {
    const res = await Client.get('/api/accounts/all')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAccountByUserId = async () => {
  try {
    const res = await Client.get('/api/accounts/:userId')
    return res.data
  } catch (error) {
    throw error
  }
}
