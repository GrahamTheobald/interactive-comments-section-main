import React from 'react'
import Photo from '../Photo'

export default function CommentHeader({user, createdAt}) {
  const {
    image: {png},
    username,
  } = user

  return (
    <div>
      <Photo src={png}/>
      <p>{username}</p>
      <p>{createdAt}</p>
    </div>
  )
}
