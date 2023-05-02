import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

/**
 * Application starting point.
 */
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Index</div>} />
        <Route path='/test' element={<div>Test</div>} />
      </Routes>
  </BrowserRouter>)
}

export default App
