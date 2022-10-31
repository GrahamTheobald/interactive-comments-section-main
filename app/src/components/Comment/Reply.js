import React from 'react'
import '../../css/reply-edit-delete.css'

export default function Reply({handle}) {
  return (
    <button 
      onClick={() => handle()}
      className="button button--reply">
        <img src="./images/icon-reply.svg" alt="reply"/>
        Reply
    </button>
  )
}
