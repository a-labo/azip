/**
 * Asynchronous zip manager
 * @module azip
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get unzip () { return d(require('./unzip')) },
  get zipDir () { return d(require('./zip_dir')) },
  get zip () { return d(require('./zip')) }
}
