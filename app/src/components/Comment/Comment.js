import React, { useContext, useState } from 'react'
import CommentHeader from './CommentHeader'
import CommentScore from './CommentScore'
import AddComment from '../Add/AddComment'
import Reply from './Reply'
import ReplyList from './ReplyList'
import EditDelete from './EditDelete'
import { UserContext } from '../App'
import '../../css/comment.css'

export default function Comment({comment, parent=null}) {
  const {
    id,
    user,
    content,
    replies=[],
    score,
    createdAt,
    replyingTo,
  } = comment
  const [renderReply, setRenderReply] = useState()
  const {currentUser} = useContext(UserContext)
  const [text, setText] = useState('')
  function handleTextInput(value) {
    setText(value)
  }
  function handleReply() {
    setRenderReply(!renderReply)
  }
  return (
    <>
      <div className="comment">
        <CommentHeader user={user} createdAt={createdAt}/>
        <div className="comment__text">
          <span className="comment__text__reply">
            {replyingTo && `@${replyingTo} `}
          </span>
          {content}
        </div>
        <CommentScore score={score}/>
        {
          currentUser.username === user.username ?
          <EditDelete/> :
          <Reply handle={handleReply}/>
        }
      </div>
      { renderReply && 
          <AddComment 
          parent={parent} 
          handleText={handleTextInput} 
          text={text} 
          reply={user.username}/>
      }
      {replies.length != 0 && <ReplyList replies={replies} parent={id}/>}    
    </>
  )
}
