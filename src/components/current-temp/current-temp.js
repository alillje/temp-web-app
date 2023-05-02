import { useEffect, useState } from 'react'
import { getLatestTempdata } from '../../services/fetch-service'
import './current-temp.css'

/**
 * CurrentTemp Component.
 */
const CurrentTemp = () => {
  const [temp, setTemp] = useState(0)
  useEffect(() => {
    /**
     * Gets the document count.
     */
    const getTempData = async () => {
      const data = await getLatestTempdata()
      setTemp(data?.temperature)
    }
    getTempData()
  }, [])

  useEffect(() => {
  }, [temp])

  return (
    <div className="current-temp-container">
      <h1>Current Temperature</h1>
      <div className="temperature">{temp}°c</div>
    </div>
  )
}

export default CurrentTemp
