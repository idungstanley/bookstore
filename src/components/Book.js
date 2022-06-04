import React from 'react'

function Book(props) {
  return (
    <li>
     <p>{props.head}</p>
     <h1>{props.title}</h1>
     <p>{props.name}</p>
     <div className="button">
      <button>Comments</button>
      <button>Remove</button>
      <button>Edit</button>
     </div>
    </li>
  )
}

export default Book
