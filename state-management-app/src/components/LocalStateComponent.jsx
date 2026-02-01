import { useState } from 'react'

const LocalStateComponent = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>Local State (useState)</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default LocalStateComponent