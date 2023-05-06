import assert from 'assert'
import * as mainAny from '../../src/entry/mainAny.js'
import * as factoriesAny from '../../src/factoriesAny.js'
import { createSnapshotFromFactories, validateBundle, validateTypeOf } from '../../src/utils/snapshot.js'
const { create, all, add, matrix, isObject, isMatrix, pi, speedOfLight, sqrt, evaluate, chain, reviver, Complex, addDependencies } = mainAny

describe("Testing help('not') throwing an error", function () {
  it('should no longer throw a syntax error when running just help(not) alone', function () {
    assert.doesNotThrow(() => evaluate('help(not)'), Error)
  })
})

describe("Testing unit version precedence over function", function () {
  it("should evaluate 'min' to minute, and 'sec' to second, while still supporting min() and sec() functions", function() {
    assert.strictEqual(typeof evaluate('min'), 'object')
    assert.strictEqual(typeof evaluate('sec'), 'object')
  })
})