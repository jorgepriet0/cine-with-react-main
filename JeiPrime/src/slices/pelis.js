import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    page: 0,
    films: [],
    isLoading: false,
  }
  
  export const filmsSlice = createSlice({
    name: 'films',
    initialState: {
      films: [],
    },
    reducers: {
      startLoadingFilms: (state) => {
        state.isLoading = true;
      },
      setFilms: (state, action) => {
        console.log(action)
        console.log(state)
        state.films = action.payload.films
      },
      otherAction: (state) => {
        console.log("TODO",state)
      }
    },
  })
  
export const {startLoadingFilms, setFilms, otherAction } = filmsSlice.actions
  