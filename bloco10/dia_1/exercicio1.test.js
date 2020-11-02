const { sum } = require('./exercicio1');

  test('sums two values', () => {
    expect(sum(2, 3)).toBe(5);
  });
