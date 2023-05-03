import { useEffect, useState } from 'react'
import { getHourlyAverage } from '../../services/fetch-service'
import dayjs from 'dayjs'
import './average-item.css'

/**
 * AverageItem Component.
 */
const AverageItem = ({ temperature = 23.3, datetime = '2023-05-02T19:00:00Z', hour = true }) => {
  const time = dayjs(datetime)

  return (
    <div className="hour-average-item">
      <div className="itemTime">{hour ? time.format('HH:mm') : time.format('dddd')}</div>
      <div className="itemTemp">{Math.round(temperature * 10) / 10}°c</div>

    </div>
  )
}

export default AverageItem
