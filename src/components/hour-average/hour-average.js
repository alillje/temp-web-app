import { useEffect, useState } from 'react'
import { getHourlyAverage } from '../../services/fetch-service'
import dayjs from 'dayjs'
import HourAverageItem from '../hour-average-item/hour-average-item.js'
import './hour-average.css'

/**
 * HourAverage Component.
 */
const HourAverage = () => {
  const [hourAverage, setHourAverage] = useState([])

  useEffect(() => {
    /**
     * Gets the document count.
     */
    const getHourAverage = async () => {
      const data = await getHourlyAverage()
      const hourAverages = Object.keys(data).map(key => {
        return {
          datetime: key,
          temperature: data[key].temperature,
          humidity: data[key].humidity
        }
      })
      setHourAverage(hourAverages)
    //   const datetime = dayjs(data?.timestamp)
    //   const formattedDatetime = datetime.format('MMMM D, YYYY, HH:mm')
    }
    getHourAverage()
  }, [])

  useEffect(() => {
    console.log(hourAverage)
  }, [hourAverage])

  return (
    <div className="hour-average-container">
      <h1>Last 24-hours</h1>
      <div className="hour-average-list">
        {hourAverage.map((tempItem) => {
          return <HourAverageItem temperature={tempItem.temperature} datetime={tempItem.datetime} key={tempItem?.timestamp} />
        })}
      </div>
    </div>
  )
}

export default HourAverage
