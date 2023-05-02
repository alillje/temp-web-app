/**
 * Fetch service module
 * Handles the calls to the API.
 * All methods returns undefined if error occurs, component error handling.
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

/**
 * Gets created at stats.
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
    console.log(response)
    const json = await response.json()
    if (response.ok) {
      return json
    }
  } catch (e) {
    throw new Error(`Unable to retrieve created at data. ${e.message}`)
  }
}
