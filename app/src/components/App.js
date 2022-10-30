import React, {useState, useEffect} from 'react'
import data from '../data.json'
import CommentList from './Comment/CommentList';
import AddComment from './Add/AddComment';
import '../css/app.css'

export const UserContext = React.createContext()
export const CommentContext = React.createContext()

function App() {
  const {comments} = data
  const {currentUser} = data

  const CommentContextValue = {
    comments
  }
  const UserContextValue = {
    currentUser
  }
  const [text, setText] = useState('')

  function handleTextInput(value) {
    setText(value)
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
