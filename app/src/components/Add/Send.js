import React, { useContext } from 'react'
import '../../css/send.css'
import { HandlerContext, UserContext } from '../App'

import { v4 as uuidv4} from 'uuid'

export default function Send({parent, reply, text, label}) {

  const { handleAddComment } = useContext(HandlerContext)
  const { currentUser } = useContext(UserContext)
  const comment = {
    "id": uuidv4(),
    "content": text,
    "createdAt": "Just now.",
    "score": 0,
    "user": currentUser,
    "replies": [],
    "replyingTo": reply
  }
  return (
    <button 
      onClick={() => handleAddComment(comment, parent)}
      className="add-comment__send button"
    >
      {label}
    </button>
  )
}
