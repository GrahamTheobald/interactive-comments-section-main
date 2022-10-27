import React, {useContext} from 'react'
import Photo from '../Photo'
import '../../css/comment-header.css'
import { UserContext } from '../App';

export default function CommentHeader({user, createdAt}) {
  const {
    image: {png},
    username,
  } = user

  const currentUser = useContext(UserContext)

  return (
    <div className="comment__header">
      <Photo src={png}/>
      <p className="comment__header__username">
        {username}
      </p>
      {
        currentUser.username === username && 
        <p className="comment__header__you">
          you
        </p>
      }
      <p className="comment__header__time-stamp">
        {createdAt}
      </p>
    </div>
  )
}
