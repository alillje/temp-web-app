/**
 * Fetch service module
 * Handles the calls to the API.
 * All methods returns undefined if error occurs, component error handling.
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

/**
 * Gets the latest recorded tempdata.
 *
 * @returns {object} - The recieved json data object.
 */
export const getLatestTempdata = async () => {
  const url = `${process.env.REACT_APP_API_URL}/tempdata/current`
  const headers = {
    'X-Api-Key': process.env.REACT_APP_API_KEY
  }
  try {
    const response = await fetch(url, { headers })
    const json = await response.json()
    if (response.ok) {
      return json
    }
  } catch (e) {
    throw new Error(`Unable to retrieve latest tempdata. ${e.message}`)
  }
}

/**
 * Gets hourly average.
 *
 * @returns {object} - The recieved json data object.
 */
export const getHourlyAverage = async () => {
  const url = `${process.env.REACT_APP_API_URL}/tempdata/hour-average`
  const headers = {
    'X-Api-Key': process.env.REACT_APP_API_KEY
  }
  try {
    const response = await fetch(url, { headers })
    const json = await response.json()
    if (response.ok) {
      return json
    }
  } catch (e) {
    throw new Error(`Unable to retrieve hour average data. ${e.message}`)
  }
}
