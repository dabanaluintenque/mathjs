import assert from 'assert'
import * as mainAny from '../../src/entry/mainAny.js'
const { evaluate } = mainAny

describe("Testing help('not') throwing an error", function () {
  it('should no longer throw a syntax error when running just help(not) alone', function () {
    assert.doesNotThrow(() => evaluate('help(not)'), Error)
  })
})
