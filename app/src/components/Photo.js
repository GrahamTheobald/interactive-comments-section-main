import React from 'react'
import '../css/photo.css'

export default function Photo({src}) {
  return (
    <div className="photo">
      <img src={src} alt="Avatar"></img>
    </div>
  )
}
