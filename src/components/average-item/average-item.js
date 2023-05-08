import dayjs from 'dayjs'
import './average-item.css'

/**
 * AverageItem Component.
 */
const AverageItem = ({ temperature = 23.3, humidity = 10, datetime = '2023-05-02T19:00:00Z', hour = true }) => {
  // Subtract 2 hours to account for timzeone difference
  // const time = dayjs(datetime).subtract(2, 'hour')
  // const time = dayjs(datetime)
  const time = dayjs(datetime).add(1, 'hour')

  return (
    <div className="hour-average-item">
      <div className="itemTime">{hour ? time.format('HH:mm') : time.format('dddd')}</div>
      <div className="avgItemData">
      <div className="itemHum">{Math.round(humidity)}%</div>
      <div className="itemTemp">{Math.round(temperature * 10) / 10}°c</div>
      </div>
    </div>
  )
}

export default AverageItem
