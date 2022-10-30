import React from 'react'

export default function TextArea({handleText, text}) {
  
  return (
    <textarea 
    onChange={(e) => handleText(e.target.value)}
    value={text}
    className="add-comment__text-area"
    placeholder='Add a comment...'>  
    </textarea>
  )
}
