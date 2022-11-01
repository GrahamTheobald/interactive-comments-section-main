import React from 'react'
import Comment from './Comment'
import '../../css/comment-list.css'

export default function CommentList({comments}) {
  return (
    <div className="comment-list">
      {comments.map((comment) => {
        return <Comment 
                  key={comment.id} 
                  comment={comment}
                />
      })}
    </div>
  )
}
