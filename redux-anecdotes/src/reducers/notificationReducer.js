import store from "./store"

import { createSlice } from '@reduxjs/toolkit'

const initialState=store.message
const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
      
    sendof(state, action) {
      const anecdote = action.payload
      return `you voted ${anecdote}`
     }
  },
})


export const { sendof } = notificationSlice.actions

export default notificationSlice.reducer