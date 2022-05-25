import store from "./store"
import { createSlice } from '@reduxjs/toolkit'



const getId = () => (100000 * Math.random()).toFixed(0)
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = store.anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState,
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload
      const data=asObject(content)
      return state.concat(data)

    },
    voteof(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = { 
        ...anecdoteToChange, 
        votes: anecdoteToChange.votes+1 
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote 
      )
     }
  },
})

/*const reducer = (state = initialState, action) => {
  
  switch(action.type) {
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    case 'VOTE': {
      const id = action.data.id
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = { 
        ...anecdoteToChange, 
        votes: anecdoteToChange.votes+1 
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote 
      )
     }
    default:
      return state
  }

}*/

/*export const createAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    data: asObject(anecdote)
  }
}

export const voteof = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}*/

export const { createAnecdote, voteof } = anecdoteSlice.actions

export default anecdoteSlice.reducer