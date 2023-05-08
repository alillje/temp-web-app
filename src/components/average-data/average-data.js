import { useEffect, useState } from 'react'
import { getHourlyAverage, getDailyAverage } from '../../services/fetch-service'
import AverageItem from '../average-item/average-item.js'
import './average-data.css'
import LoadingSpinner from '../loading-spinner/loading-spinner'

/**
 * AverageData Component.
 */
const AverageData = ({ hourly = true }) => {
  const [periodAverage, setPeriodAverage] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    /**
     * Gets the hourly average.
     */
    const getHourAverage = async () => {
      const data = await getHourlyAverage()
      console.log(data)

      const averages = Object.keys(data).map(key => {
        return {
          datetime: key,
          temperature: data[key].temperature,
          humidity: data[key].humidity
        }
      })
      setPeriodAverage(averages)
    //   const datetime = dayjs(data?.timestamp)
    //   const formattedDatetime = datetime.format('MMMM D, YYYY, HH:mm')
    }

    /**
     * Gets the daily average.
     */
    const getDayAverage = async () => {
      setLoading(true)

      const data = await getDailyAverage()
      const averages = Object.keys(data).map(key => {
        return {
          datetime: key,
          temperature: data[key].temperature,
          humidity: data[key].humidity
        }
      })
      setPeriodAverage(averages)
      setLoading(false)
    }
    hourly ? getHourAverage() : getDayAverage()
  }, [])

  useEffect(() => {
  }, [periodAverage])

  return (
    <div className="hour-average-container">
      {hourly ? <h1>Last 24 hour average</h1> : <h1>Last 10 day average</h1>}
      {loading && <LoadingSpinner />}
      {!loading && <div className="hour-average-list">
        {periodAverage.map((tempItem) => {
          return <AverageItem temperature={tempItem.temperature} datetime={tempItem.datetime} humidity={tempItem.humidity} key={tempItem?.timestamp} hour={hourly} />
        })}
      </div>}
    </div>
  )
}

export default AverageData
