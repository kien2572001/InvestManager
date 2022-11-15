import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    user: userReducer,
  },
})