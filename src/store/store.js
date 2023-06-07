import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from './slices/drawerSlice.js'

export const store = configureStore({
  reducer: {
    drawer: drawerReducer
  }
})
