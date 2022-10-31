import React, { useContext } from 'react'
import { UserContext } from '../App'
import TextArea from './TextArea'
import Send from './Send'
import Photo from '../Photo'
import '../../css/add-comment.css'

export default function AddComment(props) {
  const {
    parent,
    handleText,
    text,
    reply=false
  } = props
  const {currentUser} = useContext(UserContext)
  
  return (
    <div className="add-comment">
      <TextArea handleText={handleText} text={text}/>
      <Photo src={currentUser.image.png}/>
      <Send 
      parent={parent}
      text={text}
      reply={reply}
      label={reply ? 'Reply' : 'Send'}/>
    </div>
  )
}
