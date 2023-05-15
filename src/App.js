import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/layout.js'
import CurrentTemp from './components/current-temp/current-temp.js'
import AverageData from './components/average-data/average-data.js'

/**
 * Application starting point.
 */
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout main={<CurrentTemp />} />} />
        {/* <Route path='/hour-average' element={<Layout main={<AverageData hourly={true} />} />} />
        <Route path='/day-average' element={<Layout main={<AverageData hourly={false} />} />} /> */}
      </Routes>
  </BrowserRouter>)
}

export default App
