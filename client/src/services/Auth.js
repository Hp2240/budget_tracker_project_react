import Client from './api'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('/api/auth/signin', data)

    localStorage.setItem('token', res.data.token)
    localStorage.setItem('id', res.data.user.id)
    localStorage.setItem('email', res.data.user.email)
    console.log(res.data)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const SignUpUser = async (data) => {
  try {
    const res = await Client.post('api/auth/signup')
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('api/auth/session')
    console.log('this is the frontend check session')
    return res.data.token
  } catch (error) {
    throw error
  }
}
