import React, {useState, useEffect} from 'react'
import data from '../data.json'
import CommentList from './Comment/CommentList';
import AddComment from './Add/AddComment';
import '../css/app.css'
import { cloneDeep } from 'lodash'

export const UserContext = React.createContext()
export const HandlerContext = React.createContext()
const LOCAL_STORAGE_KEY = 'interactiveCommentsSection.comments'

function App() {
  const [comments, setComments] = useState(data.comments)
  const [currentUser, setCurrentUser] = useState(data.currentUser)
  const [text, setText] = useState('')

  useEffect(() => {
    const commentJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (commentJSON != null) setComments(JSON.parse(commentJSON))
  }, [])

  const HandlerContextValue = {
    handleAddComment,
    handleEditComment,
    handleDeleteComment,
    handleScore,
    comments
  }
  const UserContextValue = {
    currentUser
  }

  useEffect(() => {
    console.log('toad', comments)
    setText('')
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(comments))
  }, [comments]) 

  function handleScore(score, parentId, commentID) {
    const newComments = cloneDeep(comments)
    const newUser = cloneDeep(currentUser)
    let newComment
    if (parentId) {
      const parentIndex = newComments.findIndex(c => c.id === parentId)
      newComment = newComments[parentIndex].replies.find(c => c.id === commentID)
    }
    else {
      newComment = newComments.find(c => c.id === commentID)
    }

    const key = score === 1 ? 'likes' : 'dislikes'
    const otherKey = score === 1 ? 'dislikes' : 'likes'

    if (newUser[key].includes(commentID)) {
      score = -score
      newComment.score += score
      newUser[key] = newUser[key].filter(l => l !== commentID)
    }
    else if (newUser[otherKey].includes(commentID)) {
      score *= 2
      newComment.score += score
      newUser[otherKey] = newUser[otherKey].filter(l => l !== commentID)
      newUser[key].push(commentID)
    }
    else {
      newComment.score += score
      newUser[key].push(commentID)
    }

    setComments(newComments)
    setCurrentUser(newUser)
  }
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
