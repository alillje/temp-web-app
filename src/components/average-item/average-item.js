import utc from 'dayjs-plugin-utc'
import timezone from 'dayjs-plugin-timezone'
import dayjs from 'dayjs'
import './average-item.css'

// Extend dayjs with plugins
dayjs.extend(utc)
dayjs.extend(timezone)

/**
 * AverageItem Component.
 */
const AverageItem = ({ temperature = 23.3, datetime = '2023-05-02T19:00:00Z', hour = true }) => {
  const time = dayjs(datetime).tz('Europe/Stockholm')
  console.log(datetime)
  return (
    <div className="hour-average-item">
      <div className="itemTime">{hour ? time.format('HH:mm') : time.format('dddd')}</div>
      <div className="itemTemp">{Math.round(temperature * 10) / 10}°c</div>

    </div>
  )
}

export default AverageItem
