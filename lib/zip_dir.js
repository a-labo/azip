/**
 * Create a zip of entire directory
 * @function zipDir
 * @param {string} src - Source directory name
 * @param {string} [dest=src+'.zip'] - Destination file name
 * @returns {Promise}
 */
'use strict'

const co = require('co')
const fs = require('fs')
const path = require('path')
const { mkdirpAsync } = require('asfs')
const archiver = require('archiver')

/** @lends zipDir */
function zipDir (src, dest = src + '.zip') {
  return co(function * () {
    yield mkdirpAsync(path.dirname(dest))

    yield new Promise((resolve, reject) => {
      let zip = archiver.create('zip', {})
      let output = fs.createWriteStream(dest)
      output.on('close', () =>
        resolve({ size: zip.pointer() })
      )
      zip.on('error', (err) =>
        reject(err)
      )
      zip.pipe(output)
      zip.directory(src, false)
      zip.finalize()
    })
    console.log(`File generated: ${dest}`)
  })
}

module.exports = zipDir
