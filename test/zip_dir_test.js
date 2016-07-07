/**
 * Test case for zipDir.
 * Runs with mocha.
 */
'use strict'

const zipDir = require('../lib/zip_dir.js')
const assert = require('assert')
const co = require('co')

describe('zip-dir', function () {
  this.timeout(8000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Zip dir', () => co(function * () {
    yield zipDir(__dirname, `${__dirname}/../tmp/foo/testing-zip-dir.zip`)
  }))
})

/* global describe, before, after, it */
