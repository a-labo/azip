'use strict'

const co = require('co')
const { zipDir } = require('azip')

co(function * () {
  // Zip entire directory.
  yield zipDir('src/my-dir', 'dest/my-dir.zip')
}).catch((err) => console.error(err))
