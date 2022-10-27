import React, { useContext } from 'react'
import CommentHeader from './CommentHeader'
import CommentScore from './CommentScore'
import Reply from './Reply'
import ReplyList from './ReplyList'
import EditDelete from './EditDelete'
import { UserContext } from '../App'
import '../../css/comment.css'

export default function Comment({comment}) {
  const {
    user,
    content,
    replies=[],
    score,
    createdAt,
    replyingTo,
  } = comment
  const currentUser = useContext(UserContext)
  console.log(replies)
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
          <Reply/>
        }
      </div>
      {replies.length != 0 && <ReplyList replies={replies}/>}    
    </>
  )
}
