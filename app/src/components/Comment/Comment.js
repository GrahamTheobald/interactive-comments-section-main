import React, { useContext, useEffect, useState } from 'react'
import CommentHeader from './CommentHeader'
import CommentScore from './CommentScore'
import AddComment from '../Add/AddComment'
import Reply from './Reply'
import TextArea from '../Add/TextArea'
import Update from './Update'
import ReplyList from './ReplyList'
import EditDelete from './EditDelete'
import Modal from './Modal'
import { CommentContext, UserContext } from '../App'
import '../../css/comment.css'

export default function Comment({comment, parent=null}) {
  const {
    id,
    user,
    content,
    replies=[],
    score,
    createdAt,
    replyingTo,
  } = comment
  const {currentUser} = useContext(UserContext)
  const {comments} = useContext(CommentContext)
  const [renderReply, setRenderReply] = useState(false)
  const [renderEdit, setRenderEdit] = useState(false)
  const [renderModal, setRenderModal] = useState(false)
  const [text, setText] = useState('')
  const [editText, setEditText] = 
    useState(replyingTo ? `@${replyingTo} ${content}` : `${content}`)
  function handleTextInput(value) {
    setText(value)
  }
  function handleReply() {
    setRenderReply(!renderReply)
  }
  function handleEdit() {
    setRenderEdit(!renderEdit)
  }
  function handleDelete() {
    setRenderModal(!renderModal)
  }
  function handleEditInput(value) {
    setEditText(value)
  }
  useEffect(() => {
    setText('')
    setRenderReply(false)
    setRenderEdit(false)
  }, [comments])
  
  return (
    <>
      {renderModal && <div className='modal__container'/>}
      <div className="comment">
        {renderModal && <Modal cancel={handleDelete}/>}
        <CommentHeader user={user} createdAt={createdAt}/>
        { renderEdit ? 
          <div className="comment__edit">
            <TextArea 
            text={editText}
            handleText={handleEditInput}/>
            <Update 
            label={'Update'} 
            text={editText} 
            id={id}
            parent={parent}
            />
          </div> 
          :
          <div className="comment__text">
            <span className="comment__text__reply">
              {replyingTo && `@${replyingTo} `}
            </span>
            {content}
          </div>
        }
        <CommentScore score={score}/>
        {
          currentUser.username === user.username ?
          <EditDelete edit={handleEdit} del={handleDelete}/> :
          <Reply handle={handleReply}/>
        }
      </div>
      { renderReply && 
          <AddComment 
          parent={parent ? parent : id} 
          handleText={handleTextInput} 
          text={text} 
          reply={user.username}/>
      }
      {replies.length !== 0 && <ReplyList replies={replies} parent={id}/>}    
    </>
  )
}
