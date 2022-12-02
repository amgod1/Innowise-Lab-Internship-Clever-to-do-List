import { createContext, useContext, useState } from 'react'
import { ref, set, onValue } from "firebase/database";
import { db } from '../firebase.config'

const TodoContext = createContext({})

export function useTodo() {
  return useContext(TodoContext)
}

export function TodoProvider({ children }) {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const [title, setTitle] = useState('')
  const [info, setInfo] = useState('')
  const [currentDayTodos, setCurrentDayTodos] = useState('')
  const [fullDate, setFullDate] = useState('')
  const [showInfo, setShowInfo] = useState(false)

  const createDayData = (n) => {
    let today = new Date()
    let finalArr = []
    for (let i = 0; i < n; i++) {
      finalArr.push(today.toString())
      today.setDate(today.getDate() + 1)
    }
    return finalArr.map(el => new Date(el))
  }

  const generateTodoId = () => {
    const pool = 'abcdefghijklmonpqrstuvwxyz0123456789'
    let result = ''
    for (let i = 1; i < 20; i++) {
      result += (i % 5 === 0 && i !== 0) ? '-' : pool[Math.round(Math.random() * (pool.length - 1))]
    }
    return `/todo-${result}`
  }

  const getCurrentUser = () => localStorage.user.slice(0, localStorage.user.indexOf('@'))
  const showDayTodos = (m, d, y) => `${months[m]} ${(d.toString().length === 2) ? d : '0'+d} ${y}`

  const createTodo = () => {
    if (title === '' || info === '') return
    const id = generateTodoId()
    set(ref(db, `users/${getCurrentUser()}/${fullDate.split(' ').join('-')}${id}`), {
      id: id.slice(1),
      title: title,
      info: info,
      done: false,
    })
    setTitle('')
    setInfo('')
  }

  // const setDoneUndone = (id, title, info, done) => {
  //   console.log(`users/${getCurrentUser()}/${fullDate.split(' ').join('-')}/${id}`, done)
  //   set(ref(db, `users/${getCurrentUser()}/${fullDate.split(' ').join('-')}/${id}`), {

  //     done: !done,
  //   })
  // }

  const getDataFromThisDay = (m, d, y, callback) => {
    const thisDay = showDayTodos(m, d, y)
    const starCountRef = ref(db, "users/" + getCurrentUser() + "/" + thisDay.split(' ').join('-'))
    onValue(starCountRef, async (snapshot) => {
      const data = await snapshot.val()
      if (!!data) callback(Object.values(data))
    })
  }

  const showTodos = (m, d, y, data) => {
    setFullDate(showDayTodos(m, d, y))
    setCurrentDayTodos(data)
    setShowInfo(true)
  }

  return (
    <TodoContext.Provider
      value={{
        months,
        weekdays,
        createDayData,

        title,
        setTitle,
        info,
        setInfo,

        fullDate,
        showInfo,
        showDayTodos,

        createTodo,
        currentDayTodos,
        getDataFromThisDay,
        showTodos,
        getCurrentUser,

      }}
    >
      { children }
    </TodoContext.Provider>
  )
}