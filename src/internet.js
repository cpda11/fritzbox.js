
/** @module fritzInternet */

let fritzInternet = {}
module.exports = fritzInternet

const fritzRequest = require('./request.js')

/**
 * Reconnect the internet connection.
 * @param  {Object} options     - FritzBox.js options object.
 */
fritzSystem.reconnectInternet = async (options) => {
  const path = '/internet/inetstat_monitor.lua?' +
    'action=disconnect' +
    '&useajax=1' +
    '&xhr=1' +
    '&myXhr=1'
  const response = await fritzRequest.request(path, 'GET', options)

  if (response.error) return response

  if (response.body !== '{"done":0}') {
    return { error: { message: 'Reconnection initiated.', raw: response.body } }
  } else {
    console.log ('Reconnecting now: ' + response.body)
  }

}