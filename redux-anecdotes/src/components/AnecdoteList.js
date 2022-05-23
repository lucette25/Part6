import { useSelector, useDispatch } from 'react-redux'
import { voteof } from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {
  const anecdotes = useSelector(state => state).sort(function (a, b) {
        return b.votes - a.votes}) 

  const dispatch = useDispatch()
  
  const vote = (id) => {
         dispatch(voteof(id))
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
   </>
  )
}

export default AnecdoteList