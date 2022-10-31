import React from 'react'
import Edit from './Edit'
import Delete from './Delete'
import '../../css/reply-edit-delete.css'

export default function EditDelete({edit}) {
  return (
    <div className="edit-delete-container">
      <Delete/>
      <Edit handle={edit}/>
    </div>
  )
}
