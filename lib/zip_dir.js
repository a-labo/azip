/**
 * Create a zip of entire directory
 * @function zipDir
 * @param {string} src - Source directory name
 * @param {string} [dest=src+'.zip'] - Destination file name
 * @returns {Promise}
 */
'use strict'

const co = require('co')
const { statAsync } = require('asfs')
const zip = require('./zip')

/** @lends zipDir */
function zipDir (src, dest = src + '.zip') {
  return co(function * () {
    let state = yield statAsync(src)
    let isDirectory = state.isDirectory()
    if (!isDirectory) {
      throw new Error(`Not a directory: ${src}`)
    }
    return zip(src, dest)
  })
}

module.exports = zipDir
