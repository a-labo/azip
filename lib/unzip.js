/**
 * @function unzip
 * @param {string} src - Source file name
 * @param {string} dest - Destination file name
 * @param {Object} options - Optional settings
 * @returns {Promise}
 */
'use strict'

const { Parse } = require('unzip')
const fs = require('fs')
const co = require('co')
const path = require('path')
const { mkdirpAsync } = require('asfs')

/** @lends unzip */
function unzip (src, dest = src.replace(/\.zip$/, ''), options = {}) {
  return co(function * () {
    yield mkdirpAsync(path.dirname(dest))
    yield new Promise((resolve, reject) => {
      let read = fs.createReadStream(src)
      let write = fs.createWriteStream(dest)
      read.pipe(Parse()).pipe(write)
      write.on('close', () => resolve())
      write.on('error', (err) => reject())
    })
  })
}

Object.assign(unzip, {})

module.exports = unzip

