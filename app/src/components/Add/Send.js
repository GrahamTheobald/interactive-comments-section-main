import React, { useContext } from 'react'
import '../../css/send.css'
import { CommentContext } from '../App'

export default function Send({reply, parent}) {
  const { handleAddComment } = useContext(CommentContext)
  const comment = {}
  return (
    <button 
    onClick={() => handleAddComment(comment, parent)}
    className="add-comment__send button"
    >
    { reply ? 'Reply' : 'Send'}
    </button>
  )
}
