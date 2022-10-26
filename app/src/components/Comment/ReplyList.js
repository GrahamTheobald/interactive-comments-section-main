import React from 'react'
import Comment from './Comment'

export default function ReplyList({replies}) {
  return (
    <>
      <div>ReplyList</div>
      {
        replies.map(reply => {
          return <Comment key={reply.id} comment={reply}/>
        })
      }
    </>
  )
}
