import React, {useContext} from 'react'
import { CommentContext } from '../App'

export default function Update({parent, text, label, id}) {
  const { handleEditComment } = useContext(CommentContext)
  if (text.split(' ')[0][0] === '@') {
    text = text.split(' ').slice(1).join(' ')
  }
  return (
    <button 
    onClick={() => handleEditComment(text, parent, id) }
    className="add-comment__send button"
    >
    {label}
    </button>
  )
}