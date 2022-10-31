import React from 'react'
import '../../css/reply-edit-delete.css'

export default function Delete({handle}) {
  return (
    <button 
      onClick={() => handle()}
      className="button button--delete"
    >
      <img src="./images/icon-delete.svg" alt="delete"/>
      Delete
    </button>
  )
}
