import React from 'react'
import Edit from './Edit'
import Delete from './Delete'
import '../../css/reply-edit-delete.css'

export default function EditDelete() {
  return (
    <div className="edit-delete-container">
      <Delete/>
      <Edit/>
    </div>
  )
}
