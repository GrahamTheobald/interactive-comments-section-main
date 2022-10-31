import React, {useContext} from 'react'
import { HandlerContext } from '../App'
import { CommentContext } from './Comment'

export default function Update({text}) {
  const { handleEditComment } = useContext(HandlerContext)
  const { parent, id } = useContext(CommentContext)
  
  if (text.split(' ')[0][0] === '@') {
    text = text.split(' ').slice(1).join(' ')
  }
  return (
    <button 
      onClick={() => handleEditComment(text, parent, id) }
      className="add-comment__send button"
    >
      Update
    </button>
  )
}