const fritz = require('../index.js')
const options = require('../package.json').options

async function version () {
  const version = await fritz.getVersion(options)
  if (version.error) {
    console.log('Error:', version.error.message)
  } else {
    console.log('FritzBox runs on version', version)
  }
}

version()
