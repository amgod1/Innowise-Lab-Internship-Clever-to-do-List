const TodoAmount = (props) => (
  <div
    style={{ width: '10px', height: '10px' }}
    className={`${props.done ? 'bg-success' : 'bg-danger'} rounded-circle mt-2`}
  />
)

export default TodoAmount
