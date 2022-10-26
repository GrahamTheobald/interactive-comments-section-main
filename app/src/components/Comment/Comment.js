import React, { useContext } from 'react'
import CommentHeader from './CommentHeader'
import CommentScore from './CommentScore'
import Reply from './Reply'
import ReplyList from './ReplyList'
import EditDelete from './EditDelete'
import { UserContext } from '../App'

export default function Comment({comment}) {
  const {
    user,
    content,
    replies,
    score,
    createdAt,
    replyingTo,
  } = comment
  const currentUser = useContext(UserContext)
  return (
    <>
      <div>
        <CommentHeader user={user} createdAt={createdAt}/>
        <div>
          <span>{replyingTo && `@${replyingTo} `}</span>
          {content}
        </div>
        <CommentScore score={score}/>
        {
          currentUser.username === user.username ?
          <EditDelete/> :
          <Reply/>
        }
      </div>
      {replies && <ReplyList replies={replies}/>}
      
    </>
  )
}
