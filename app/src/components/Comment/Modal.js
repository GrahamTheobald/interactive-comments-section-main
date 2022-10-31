import React from 'react'
import '../../css/modal.css'

export default function Modal() {
  return (
    <div className="modal__container">
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
            className="button button--modal">
              No, Cancel
          </button>
          <button
            className="button button--modal button--cancel">
              Yes, Delete
          </button>
        </div>
      </div>


    </div>
  )
}
