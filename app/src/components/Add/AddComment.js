import React, { useContext } from 'react'
import { UserContext } from '../App'
import TextArea from './TextArea'
import Send from './Send'
import Photo from '../Photo'
import '../../css/add-comment.css'

export default function AddComment(props) {
  const {
    parent=null,
    handleText,
    text
  } = props
  const {currentUser} = useContext(UserContext)
  
  console.log(parent)
  return (
    <div className="add-comment">
      <TextArea handleText={handleText} text={text}/>
      <Photo src={currentUser.image.png}/>
      <Send/>
    </div>
  )
}
