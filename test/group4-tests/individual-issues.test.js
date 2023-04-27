const assert = require('assert')
const math = require('math')

describe("Testing help('not') throwing an error", function () {
  it('should no longer throw a syntax error when running just help(not) alone', function () {
    assert.doesNotThrow(() => math.evaluate('help(not)'), Error)
  })
})
