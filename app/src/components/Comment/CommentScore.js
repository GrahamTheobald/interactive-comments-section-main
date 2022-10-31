import React from 'react'
import '../../css/comment-score.css'

export default function CommentScore({score}) {
  return (
    <div className="comment__score">
      <button 
        className="comment__score__button comment__score__button--plus">
          <img src="./images/icon-plus.svg" alt="plus"/>
      </button>
      <div className="comment__score__number">
        {score}
      </div>
      <button 
        className="comment__score__button comment__score__button--minus">
          <img src="./images/icon-minus.svg" alt="minus"/>
      </button>
    </div>
  )
}
