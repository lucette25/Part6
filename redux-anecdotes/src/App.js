
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'

const App = () => {
   return (
    <div>
      <Notification/>
      <h2>Anecdotes</h2>
     <AnecdoteList/>
      <h2>create new</h2>
     <AnecdoteForm/>
    </div>
  )
}

export default App