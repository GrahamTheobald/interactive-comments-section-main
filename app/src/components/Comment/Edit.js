import React from 'react'
import '../../css/reply-edit-delete.css'


export default function Edit({handle}) {
  return (
    <button 
      onClick={() => handle()}
      className="button button--edit"
    >
      <img src="./images/icon-edit.svg" alt="edit"/>
      Edit
    </button>
  )
}
