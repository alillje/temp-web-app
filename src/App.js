import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/layout.js'

import CurrentTemp from './components/current-temp/current-temp.js'

/**
 * Application starting point.
 */
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout main={<CurrentTemp />} />} />
        <Route path='/test' element={<div>Test</div>} />
      </Routes>
  </BrowserRouter>)
}

export default App
