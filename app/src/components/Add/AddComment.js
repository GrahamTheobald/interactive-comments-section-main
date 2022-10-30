import React, { useContext } from 'react'
import { UserContext } from '../App'
import TextArea from './TextArea'
import Send from './Send'
import Photo from '../Photo'
import '../../css/add-comment.css'

export default function AddComment() {
  const {currentUser} = useContext(UserContext)
  return (
    <div className="add-comment">
      <TextArea/>
      <Photo src={currentUser.image.png}/>
      <Send/>
    </div>
  )
}
