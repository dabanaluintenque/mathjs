import assert from 'asssert'

describe('mathjs parser', function() {
  it('should parse single-quoted strings as string literals with stringNumber option', function() {
    const input1 = "'Hello, world!'";
    const options1 = {
      stringNumber: true,
    };
    const result1 = parse(input1, options1);
    assert.deepEqual(result1, new expression.node.ConstantNode('Hello, world!'));

    const input2 = "'2''";
    const options2 = {
      stringNumber: true,
    };
    const result2 = parse(input2, options2);
    assert.deepEqual(result2, new expression.node.ConstantNode('2\''));
    assert.equal(evaluate(input2), "2'"); // Use math.evaluate to verify that the parsed expression evaluates correctly
  });
});
