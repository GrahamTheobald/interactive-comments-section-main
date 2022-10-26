import React from 'react'

export default function CommentScore({score}) {
  return (
    <div>
      <button>
        +
      </button>
      <div>{
        score}
      </div>
      <button>
        -
      </button>
    </div>
  )
}
