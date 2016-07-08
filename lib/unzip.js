/**
 * @function unzip
 * @param {string} src - Source file name
 * @param {string} dest - Destination file name
 * @param {Object} options - Optional settings
 * @returns {Promise}
 */
'use strict'

const extractZip = require('extract-zip')
const co = require('co')
const path = require('path')

/** @lends unzip */
function unzip (src, dest = path.dirname(src), options = {}) {
  return co(function * () {
    yield new Promise((resolve, reject) => {
      extractZip(src, { dir: dest }, (err) =>
        err ? reject(err) : resolve()
      )
    })
  })
}

Object.assign(unzip, {})

module.exports = unzip

