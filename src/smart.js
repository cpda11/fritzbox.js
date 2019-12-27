
/** @module fritzSmart */

let fritzSmart = {}
module.exports = fritzSmart

const fritzRequest = require('./request.js')

/**
 * Set smart home temperature.
 * @param  {Object} options     - FritzBox.js options object.
 * @param  {integer} temperature - Target temperature.
 */
fritzSystem.setTemparature = async (device, temperature, options) => {
  options.removeSidFromUri = true
  const path = '/net/home_auto_overview.lua'
  const form = {
    sid: options.sid,
    device: device,
    target_temperature: temperature,
    xhr: 1,
    useajax: 1
  }

  const response = await fritzRequest.request(path, 'POST', options, false, false, form)

  return response

}