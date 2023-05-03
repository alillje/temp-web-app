/**
 * Redux store module
 * Contains the redux store reducers
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './reducers/menu'

// Create a new store that stores all reducers
const store = configureStore({
  reducer: {
    menu: menuReducer
  }
})

export default store
