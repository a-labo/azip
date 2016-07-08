/**
 * Test case for zip.
 * Runs with mocha.
 */
'use strict'

const zip = require('../lib/zip.js')
const assert = require('assert')
const co = require('co')

describe('zip', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Zip', () => co(function * () {
    yield zip(__dirname, `${__dirname}/../tmp/testing-zip.zip`)
  }))
})

/* global describe, before, after, it */
