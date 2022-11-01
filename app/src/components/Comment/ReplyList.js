import React from 'react'
import Comment from './Comment'
import '../../css/reply-list.css'

export default function ReplyList({replies, parent}) {
  return (
    <div className="reply-list">
      <div className="reply-list__divider"></div>
      <div className="reply-list__replies">
      {
        replies.map(reply => {
          return <Comment key={reply.id} comment={reply} parent={parent}/>
        })
      }
      </div>
    </div>
  )
}
