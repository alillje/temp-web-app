import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/layout.js'
import CurrentTemp from './components/current-temp/current-temp.js'
import HourAverage from './components/hour-average/hour-average.js'

/**
 * Application starting point.
 */
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout main={<CurrentTemp />} />} />
        <Route path='/hour-average' element={<Layout main={<HourAverage />} />} />
      </Routes>
  </BrowserRouter>)
}

export default App
