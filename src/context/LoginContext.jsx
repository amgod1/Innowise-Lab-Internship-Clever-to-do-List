import { createContext, useContext, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase.config'

const LoginContext = createContext({})

export function useLogin() {
  return useContext(LoginContext)
}

export function LoginProvider({ children }) {
  const [mailIn, setMailIn] = useState('')
  const [passwordIn, setPasswordIn] = useState('')
  const [mailReg, setMailReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')
  const [user, setUser] = useState((!!localStorage.user) ? localStorage.user : '')

  const createUser = async () => {
    try {
      const currentUser = await createUserWithEmailAndPassword(auth, mailReg, passwordReg)
      if (!!auth) {
        setUser(currentUser.user.email)
        localStorage.setItem('user', currentUser.user.email)
      }
      setMailReg('')
      setPasswordReg('')
    } catch (err) {
      alert(err.message)
    }
  }

  const onCreateAccount = () => {
    if (mailReg === '' || mailReg === ' ') {alert(`Mail can't be empty`)} 
    else if (mailReg.length < 5) {alert(`Mail is too short`)} 
    else if (mailReg.length > 30) {alert(`Mail is too long`)} 
    else if (!mailReg.includes('@')) {alert(`Invalid mail (missing @)`)} 
    else if (!mailReg.includes('.com') && !mailReg.includes('.by') && !mailReg.includes('.ru')) {alert(`Invalid domain zone (missing .com/.ru/.by)`)} 
    else if (passwordReg === '' || passwordReg === ' ') {alert(`Password can't be empty`)}
    else if (passwordReg.length < 5) {alert(`Password is too short`)} 
    else if (passwordReg.length > 30) {alert(`Password is too long`)}
    else if (mailReg === passwordReg) {alert('Password cannot be the same as the mail')} 
    else {
      createUser()
    }
  }

  const onLoginIn = async () => {
    try {
      const currentUser = await signInWithEmailAndPassword(auth, mailIn, passwordIn)
      setUser(currentUser.user.email)
      localStorage.setItem('user', currentUser.user.email)
      
      setMailIn('')
      setPasswordIn('')
    } catch (err) {
      alert(err.message)
    }
  }

  const onLogOut = async () => {
    await signOut(auth)
    setUser('')
    localStorage.removeItem('user')
  }

  return (
    <LoginContext.Provider
      value={{
        mailIn,
        setMailIn,
        passwordIn,
        setPasswordIn,
        onLoginIn,

        mailReg,
        setMailReg,
        passwordReg,
        setPasswordReg,
        onCreateAccount,

        user,
        setUser,
        onLogOut,
      }}
    >
      { children }
    </LoginContext.Provider>
  )
}
