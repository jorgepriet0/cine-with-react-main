import { configureStore } from '@reduxjs/toolkit'
import {filmsSlice} from '../slices/pelis'

export default configureStore({
  reducer: {
    films: filmsSlice.reducer,
  },
})