import { useEffect, useState } from 'react'
import { getHourlyAverage, getDailyAverage } from '../../services/fetch-service'
import dayjs from 'dayjs'
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
      const data = await getDailyAverage()
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
    setLoading(true)
    hourly ? getHourAverage() : getDayAverage()
    setLoading(false)
  }, [])

  useEffect(() => {
    console.log(periodAverage)
  }, [periodAverage])

  return (
    <div className="hour-average-container">
      {hourly ? <h1>Last 24 hours average</h1> : <h1>Last 10 days average</h1>}
      {loading && <LoadingSpinner />}
      {!loading && <div className="hour-average-list">
        {periodAverage.map((tempItem) => {
          return <AverageItem temperature={tempItem.temperature} datetime={tempItem.datetime} key={tempItem?.timestamp} hour={hourly} />
        })}
      </div>}
    </div>
  )
}

export default AverageData
