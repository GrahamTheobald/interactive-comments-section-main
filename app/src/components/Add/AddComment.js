import React, { useContext } from 'react'
import { UserContext } from '../App'
import TextArea from './TextArea'
import Send from './Send'
import Photo from '../Photo'
import '../../css/add-comment.css'

export default function AddComment() {
  const user = useContext(UserContext)
  return (
    <div className="add-comment">
      <TextArea/>
      <Photo src={user.image.png}/>
      <Send/>
    </div>
  )
}
