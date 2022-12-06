import { createContext, useContext, useState } from 'react'
import {
  ref, set, onValue, remove, update,
} from 'firebase/database'
import { db } from '../firebase.config'

const TodoContext = createContext({})

export function useTodo() {
  return useContext(TodoContext)
}

export function TodoProvider({ children }) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const [title, setTitle] = useState('') // variable to store new todo title
  const [info, setInfo] = useState('') // variable to store new todo info
  const [updatedTitle, setUpdatedTitle] = useState('') // variable to store updated todo title
  const [updatedInfo, setUpdatedInfo] = useState('') // variable to store updated todo info
  const [todosArray, setTodosArray] = useState('') // variable to store all user todos
  const [fullDate, setFullDate] = useState('') // variable to show choosen day date
  const [showInfo, setShowInfo] = useState(false) // variable to show current day todos

  const onSwap = (currRef, callback, value) => { // increase counter for creating day data
    const fullWidth = currRef.current?.children[0].offsetWidth * currRef.current?.children.length
    const seenWidth = currRef.current?.offsetWidth
    const possibleScroll = fullWidth - seenWidth
    const check = () => {
      if (currRef.current?.scrollLeft * 100 / possibleScroll > 97) {
        currRef.current.removeEventListener('scroll', check)
        callback(value + 1)
      }
    }
    currRef.current.addEventListener('scroll', check)
  }

  const createDayData = (n) => { // create n days to create notes
    const today = new Date()
    const finalArr = []
    for (let i = 0; i < n; i++) {
      finalArr.push(today.toString())
      today.setDate(today.getDate() + 1)
    }
    return finalArr.map((el) => new Date(el))
  }

  const generateTodoId = () => { // generate id for new todo
    const pool = 'abcdefghijklmonpqrstuvwxyz0123456789'
    let result = ''
    for (let i = 1; i < 20; i++) {
      result += (i % 5 === 0 && i !== 0) ? '-' : pool[Math.round(Math.random() * (pool.length - 1))]
    }
    return `/todo-${result}`
  }

  const getCurrentUser = () => localStorage.user.slice(0, localStorage.user.indexOf('@'))
  const showHumanDayTodos = (m, d, y) => `${months[m]} ${(d.toString().length === 2) ? d : `0${d}`} ${y}`
  const showDatabaseDayInfo = (m, d, y) => showHumanDayTodos(m, d, y).split(' ').join('-')

  const getUserTodos = () => { // get all user todos from database
    const starCountRef = ref(db, `users/${getCurrentUser()}`)
    onValue(starCountRef, async (snapshot) => {
      const data = await snapshot.val()
      if (data) {
        setTodosArray(Object.values(data))
      } else setTodosArray('')
    })
  }

  const createTodo = () => { // create todo and set it to the database
    if (title === '' || info === '') return
    const id = generateTodoId()
    set(ref(db, `users/${getCurrentUser()}${id}`), {
      date: fullDate.split(' ').join('-'),
      done: false,
      id: id.slice(1),
      info,
      title,
    })
    setTitle('')
    setInfo('')
  }

  const updateTitleAndInfo = (id) => { // update todo's done value
    // console.log(id)
    const updates = {
      [`users/${getCurrentUser()}/${id}/title`]: updatedTitle,
      [`users/${getCurrentUser()}/${id}/info`]: updatedInfo,
    }
    update(ref(db), updates)
  }

  const setDoneUndone = (id, value) => { // update todo's done value
    const updates = {
      [`users/${getCurrentUser()}/${id}/done`]: !value,
    }
    update(ref(db), updates)
  }

  const removeTodo = (id) => { // remove todo from database
    remove(ref(db, `users/${getCurrentUser()}/${id}`))
  }

  const showTodos = (m, d, y) => { // set and show current date todos
    setFullDate(showHumanDayTodos(m, d, y))
    setShowInfo(true)
  }

  return (
    <TodoContext.Provider
      value={{
        months,
        weekdays,
        onSwap,
        createDayData,
        title,
        setTitle,
        info,
        setInfo,
        updatedTitle,
        setUpdatedTitle,
        updatedInfo,
        setUpdatedInfo,

        fullDate,
        showInfo,
        showDatabaseDayInfo,

        createTodo,
        setDoneUndone,
        updateTitleAndInfo,
        removeTodo,
        getUserTodos,

        todosArray,
        showTodos,
      }}
    >
      { children }
    </TodoContext.Provider>
  )
}
