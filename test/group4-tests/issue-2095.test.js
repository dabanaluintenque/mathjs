import assert from 'assert'
import * as mainAny from '../../src/entry/mainAny.js'
const { evaluate } = mainAny

describe('Testing unit version precedence over function', function () {
  it('should evaluate \'min\' to minute, and \'sec\' to second, while still supporting min() and sec() functions', function () {
    assert.strictEqual(typeof evaluate('min'), 'object')
    assert.strictEqual(typeof evaluate('sec'), 'object')

    assert.strictEqual(evaluate('sec(0)'), 1)
  })
})
