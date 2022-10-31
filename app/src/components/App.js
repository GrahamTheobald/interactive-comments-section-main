import React, {useState, useEffect} from 'react'
import data from '../data.json'
import CommentList from './Comment/CommentList';
import AddComment from './Add/AddComment';
import '../css/app.css'
import { cloneDeep } from 'lodash'

export const UserContext = React.createContext()
export const CommentContext = React.createContext()

function App() {
  const {currentUser} = data
  const [comments, setComments] = useState(data.comments)
  const [text, setText] = useState('')

  const CommentContextValue = {
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
    return null 
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
    <CommentContext.Provider value={CommentContextValue}>
    <UserContext.Provider value={UserContextValue}>
    <div className='container'>
      <CommentList comments={comments}/>
      <AddComment handleText={handleTextInput} text={text}/>
    </div>
    </UserContext.Provider>
    </CommentContext.Provider>
  ) 
}

export default App;
