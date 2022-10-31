import React, {useState, useEffect} from 'react'
import data from '../data.json'
import CommentList from './Comment/CommentList';
import AddComment from './Add/AddComment';
import '../css/app.css'
import { cloneDeep } from 'lodash'

export const UserContext = React.createContext()
export const HandlerContext = React.createContext()

function App() {
  const {currentUser} = data
  const [comments, setComments] = useState(data.comments)
  const [text, setText] = useState('')

  const HandlerContextValue = {
    handleAddComment,
    handleEditComment,
    handleDeleteComment,
    comments
  }
  const UserContextValue = {
    currentUser
  }

  useEffect(() => {
    setText('')
  }, [comments]) 

  function handleTextInput(value) {
    setText(value)
  }
  function handleDeleteComment(parentComment, commentID) {
    let newComments = cloneDeep(comments) 
    if (parentComment) {
      const parentIndex = newComments.findIndex(c => c.id === parentComment)
      newComments[parentIndex].replies = newComments[parentIndex].replies.filter(c => c.id !== commentID)

    }
    else {
      newComments = newComments.filter(c => c.id !== commentID)
    }
    setComments(newComments)
  }
  function handleEditComment(text, parentComment, commentID) {
    const newComments = cloneDeep(comments)
    if (parentComment) {
      const parentIndex = newComments.findIndex(c => c.id === parentComment)
      const editComment = newComments[parentIndex].replies.find(c => c.id === commentID)
      editComment.content = text
    }
    else {
      const editComment = newComments.find(c => c.id === commentID)
      editComment.content = text
    }
    setComments(newComments)
  }
  function handleAddComment(addedComment, parentComment) {
    const newComments = cloneDeep(comments)
    if (parentComment) {
      const parentIndex = newComments.findIndex(c => c.id === parentComment)
      newComments[parentIndex].replies.push(addedComment)
    }
    else {
      newComments.push(addedComment)
    }
    setComments(newComments)
  }

  return(
    <HandlerContext.Provider value={HandlerContextValue}>
    <UserContext.Provider value={UserContextValue}>
    <div className='container'>
      <CommentList comments={comments}/>
      <AddComment handleText={handleTextInput} text={text}/>
    </div>
    </UserContext.Provider>
    </HandlerContext.Provider>
  ) 
}

export default App;
