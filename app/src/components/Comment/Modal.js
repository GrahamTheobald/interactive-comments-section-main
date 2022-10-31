import React from 'react'
import '../../css/modal.css'

export default function Modal({cancel}) {
  return (
    <>
      
      <div className="modal">
        <div className="modal__title">
          Delete Comment
        </div>
        <div className="modal__text">
          Are you sure you want to delete this comment?
          This will remove the comment and can't be undone.
        </div>
        <div className="modal__buttons-container">
          <button 
            onClick={() => cancel()}
            className="button button--modal">
              No, Cancel
          </button>
          <button
            className="button button--modal button--cancel">
              Yes, Delete
          </button>
        </div>
      </div>
    </>


  )
}
