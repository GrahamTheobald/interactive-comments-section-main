import React, {useSate, useEffect} from 'react'
import data from '../data.json'
import CommentList from './Comment/CommentList';
import AddComment from './Add/AddComment';
import '../css/app.css'

export const UserContext = React.createContext()

function App() {
  const {comments} = data
  const {currentUser} = data


  return(
    <>
    <UserContext.Provider value={currentUser}>
      <CommentList comments={comments}/>
      <AddComment/>
    </UserContext.Provider>
    </>
  ) 
}

export default App;
