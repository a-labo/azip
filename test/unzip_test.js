/**
 * Test case for unzip.
 * Runs with mocha.
 */
'use strict'

const unzip = require('../lib/unzip.js')
const assert = require('assert')
const co = require('co')

describe('unzip', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Unzip', () => co(function * () {
    yield unzip(
      `${__dirname}/../misc/mocks/mock-zip.zip`,
      `${__dirname}/../tmp/foo/bar`
    )
  }))
})

/* global describe, before, after, it */
