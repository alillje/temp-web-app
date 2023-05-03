/**
 * Redux menu module.
 * Create a menu slice with different actions
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { createSlice } from '@reduxjs/toolkit'

// Create a user slice with different actions
export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    show: false
  },
  reducers: {
    /**
     * Sets all state variables to values defined in the action object.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    toggleMenu: (state, action) => {
      state.show = action.payload.show
    }
  }
})

export const { toggleMenu } = menuSlice.actions
export default menuSlice.reducer
