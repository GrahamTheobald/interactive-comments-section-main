import React, { useContext } from 'react'
import { UserContext } from '../App'
import TextArea from './TextArea'
import Send from './Send'
import Photo from '../Photo'

export default function AddComment() {
  const user = useContext(UserContext)
  return (
    <div>
      <TextArea/>
      <div>
        <Photo src={user.image.png}/>
        <Send/>

      </div>
    </div>
  )
}
