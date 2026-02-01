import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../store/counterSlice'

const ReduxComponent = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h3>Global State (Redux)</h3>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default ReduxComponent