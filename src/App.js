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
      </Routes>
  </BrowserRouter>)
}

export default App
