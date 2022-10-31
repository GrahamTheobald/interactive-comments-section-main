import React, { useContext }from 'react'
import { CommentContext } from './Comment'
import { HandlerContext, UserContext} from '../App'
import '../../css/comment-score.css'

export default function CommentScore({score}) {
  const {parent, id} = useContext(CommentContext)
  const {handleScore} = useContext(HandlerContext)
  const {currentUser} = useContext(UserContext)
  return (
    <div className="comment__score">
      <button
        onClick={() => handleScore(1, parent, id)} 
        className={ 
          currentUser.likes.includes(id) ? 
          'active comment__score__button comment__score__button--plus':
          'comment__score__button comment__score__button--plus'}
      >
          <img src="./images/icon-plus.svg" alt="plus"/>
      </button>
      <div className="comment__score__number">
        {score}
      </div>
      <button 
        onClick={() => handleScore(-1, parent, id)}
        className={ 
          currentUser.dislikes.includes(id) ? 
          'active comment__score__button comment__score__button--plus':
          'comment__score__button comment__score__button--plus'}
        >
          <img src="./images/icon-minus.svg" alt="minus"/>
      </button>
    </div>
  )
}
