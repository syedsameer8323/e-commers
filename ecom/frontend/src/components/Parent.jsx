import React from 'react'
import child from ./components/child 

function parent() {
  return (
    <div>
        <h1>Parent Components</h1>
        <child name="Gopinath" age={22} />
        <child name="Akshitha" age={20} />
      
    </div>
  )
}

export default parent


