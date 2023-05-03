import { useEffect, useState } from 'react'
import { getHourlyAverage } from '../../services/fetch-service'
import dayjs from 'dayjs'
import './average-item.css'

/**
 * AverageItem Component.
 */
const AverageItem = ({ temperature = 23.3, datetime = '2023-05-02T19:00:00Z' }) => {
  const time = dayjs(datetime)

  return (
    <div className="hour-average-item">
      <div className="itemTime">{time.format('HH:mm')}</div>
      <div className="itemTemp">{Math.round(temperature * 10) / 10}°c</div>

    </div>
  )
}

export default AverageItem
