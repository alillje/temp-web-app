import { useEffect, useState } from 'react'
import { getLatestTempdata } from '../../services/fetch-service'
import dayjs from 'dayjs'
import './current-temp.css'
import LoadingSpinner from '../loading-spinner/loading-spinner'

/**
 * CurrentTemp Component.
 */
const CurrentTemp = () => {
  const [temp, setTemp] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [datetime, setDateTime] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    /**
     * Gets the document count.
     */
    const getTempData = async () => {
      setLoading(true)
      const data = await getLatestTempdata()
      setTemp(data?.temperature)
      setHumidity(data?.humidity)
      const datetime = dayjs(data?.timestamp)
      const formattedDatetime = datetime.format('MMMM D, YYYY, HH:mm')
      setDateTime(formattedDatetime)
      setLoading(false)
    }
    getTempData()
  }, [])

  useEffect(() => {
  }, [temp, humidity])

  if (loading) {
    return <LoadingSpinner />
  } else {
    return (
    <div className="current-temp-container">
      <h1>Temperature</h1>
      <div className="temperature">{temp}°c</div>
      <h2>Humidity</h2>
      <div className="humidity">{humidity}%</div>
      <div className="time">Latest at {datetime}</div>
    </div>
    )
  }
}

export default CurrentTemp
