import React, {useContext} from 'react'
import { CommentContext } from './Comment'
import '../../css/modal.css'

export default function Modal(props) {
  const {
    del,
    cancel,
  } = props
  const { parent, id} = useContext(CommentContext)

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
            onClick={() => del(parent, id)}
            className="button button--modal button--cancel">
              Yes, Delete
          </button>
        </div>
      </div>
    </>
  )
}
