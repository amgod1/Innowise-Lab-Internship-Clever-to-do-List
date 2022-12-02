import React from 'react'
const TodoAmount = (props) => {
  return (
    <div 
      style={{width: '15px', height: '15px'}} 
      className={`${props.done ? 'bg-success': 'bg-danger'} rounded-circle mt-2`}
    ></div>
  )
}

export default TodoAmount