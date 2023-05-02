import { useEffect, useState } from 'react'
import { getLatestTempdata } from '../../services/fetch-service'
import dayjs from 'dayjs'
import './current-temp.css'

/**
 * CurrentTemp Component.
 */
const CurrentTemp = () => {
  const [temp, setTemp] = useState(0)
  const [datetime, setDateTime] = useState('')
  useEffect(() => {
    /**
     * Gets the document count.
     */
    const getTempData = async () => {
      const data = await getLatestTempdata()
      setTemp(data?.temperature)
      console.log(data)
      const datetime = dayjs(data?.timestamp)
      const formattedDatetime = datetime.format('MMMM D, YYYY, HH:mm')
      setDateTime(formattedDatetime)
    }
    getTempData()
  }, [])

  useEffect(() => {
  }, [temp])

  return (
    <div className="current-temp-container">
      <h1>Current Temperature</h1>
      <div className="temperature">{temp}°c</div>
      <div className="time">Last measure at: {datetime}</div>
    </div>
  )
}

export default CurrentTemp
