/**
 * Asynchronous zip manager
 * @module azip
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get zipDir () { return d(require('./zip_dir')) }
}
