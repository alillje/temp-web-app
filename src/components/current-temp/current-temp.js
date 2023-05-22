import { useEffect, useState, useRef } from 'react'
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
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const intervalRef = useRef() // Add this line to hold a reference to the interval

  useEffect(() => {
    /**
     * Gets the tempdata.
     */
    const getTempData = async () => {
      // setLoading(true)
      try {
        const data = await getLatestTempdata()
        setTemp(data?.temperature)
        setHumidity(data?.humidity)
        const datetime = dayjs(data?.timestamp)
        const formattedDatetime = datetime.format('MMMM D, YYYY, HH:mm:ss')
        setDateTime(formattedDatetime)
        setError(null)
        setLoading(false)
      } catch (e) {
        setLoading(false)
        setError('Unable to retrieve temperature & humidity data')
      }
    }

    // Get initial data
    getTempData()

    // Set an interval to get updated data every 5 seconds
    intervalRef.current = setInterval(() => {
      getTempData()
    }, 5000)

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  useEffect(() => {
  }, [temp, humidity])

  if (loading) {
    return <LoadingSpinner />
  } else if (error) {
    return (
      <div className="current-temp-container">
        <div className="current-temp-error">
          <div>{error}</div>
          <div>Retrying..</div>
        </div>
      </div>
    )
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
