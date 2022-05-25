import { useSelector, useDispatch } from 'react-redux'
import { voteof } from '../reducers/anecdoteReducer'
//import { sendof } from '../reducers/notificationReducer'



const AnecdoteList = (props) => {
  const anecdote = useSelector(state => state.anecdote)
 const  arrayForSort = [...anecdote]
  const anecdotes=arrayForSort.sort(function (a, b) {
   return b.votes - a.votes}) 

  const dispatch = useDispatch()
  
  const vote = (anecdote) => {
         dispatch(voteof(anecdote.id))
         //dispatch(sendof(anecdote.content))

        }

  return (
   <>
    {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
   </>
  )
}

export default AnecdoteList