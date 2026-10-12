import React from 'react'

function Child(props) {
  return (
    <div>
      <h1>Chiild Info</h1>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
    </div>
  )
}

export default Childprops