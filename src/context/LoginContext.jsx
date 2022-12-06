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
  const [show, setShow] = useState(false)
  const [text, setText] = useState('')
  const [user, setUser] = useState((localStorage.user) ? localStorage.user : '')

  const createUser = async () => {
    try {
      const currentUser = await createUserWithEmailAndPassword(auth, mailReg, passwordReg)
      if (auth) {
        setUser(currentUser.user.email)
        localStorage.setItem('user', currentUser.user.email)
      }
      setMailReg('')
      setPasswordReg('')
    } catch (err) {
      setText(err.message)
      setShow(true)
    }
  }

  const onCreateAccount = () => {
    if (mailReg === '' || mailReg === ' ') {
      setText('Mail can\'t be empty'); setShow(true)
    } else if (mailReg.length < 5) {
      setText('Mail is too short'); setShow(true)
    } else if (mailReg.length > 30) {
      setText('Mail is too long'); setShow(true)
    } else if (!mailReg.includes('@')) {
      setText('Invalid mail (missing @)'); setShow(true)
    } else if (passwordReg === '' || passwordReg === ' ') {
      setText('Password can\'t be empty'); setShow(true)
    } else if (passwordReg.length < 5) {
      setText('Password is too short'); setShow(true)
    } else if (passwordReg.length > 30) {
      setText('Password is too long'); setShow(true)
    } else if (mailReg === passwordReg) {
      setText('Password cannot be the same as the mail'); setShow(true)
    } else {
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
      setText(err.message)
      setShow(true)
    }
  }

  const onLogOut = async () => {
    await signOut(auth)
    setUser('')
    setText('')
    setShow('')
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

        show,
        text,
        user,
        setUser,
        onLogOut,
      }}
    >
      { children }
    </LoginContext.Provider>
  )
}
