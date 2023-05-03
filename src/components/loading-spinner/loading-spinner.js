import { useEffect, useState } from 'react'
import { getLatestTempdata } from '../../services/fetch-service'
import dayjs from 'dayjs'
import './loading-spinner.css'

/**
 * LoadingSpinner Component.
 */
const LoadingSpinner = () => {
  return (
<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  )
}

export default LoadingSpinner
