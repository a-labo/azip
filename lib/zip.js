/**
 * Create a zip
 * @function zip
 * @param {string} src - Source file name
 * @param {string} [dest=src+'.zip'] - Destination file name
 * @returns {Promise}
 */
'use strict'

const co = require('co')
const fs = require('fs')
const path = require('path')
const { mkdirpAsync, statAsync } = require('asfs')
const archiver = require('archiver')

/** @lends zip */
function zip (src, dest = src + '.zip', options = {}) {
  return co(function * () {
    yield mkdirpAsync(path.dirname(dest))

    let stream = yield zip.stream(src, options)
    yield new Promise((resolve, reject) => {
      let output = fs.createWriteStream(dest)
      output.on('close', () => resolve({ size: stream.pointer() }))
      output.on('error', (err) => reject(err))
      stream.pipe(output)
      process.nextTick(() => {
        stream.finalize()
      })
    })
    return { generated: dest }
  })
}

Object.assign(zip, {
  stream (src, options = {}) {
    return co(function * () {
      let zip = archiver.create('zip', {})
      let state = yield statAsync(src)
      if (state.isDirectory()) {
        let dirname = options.dirname || path.basename(src)
        zip.directory(src, dirname)
      } else {
        zip.file(src, false)
      }
      return zip
    })
  }
})

module.exports = zip
