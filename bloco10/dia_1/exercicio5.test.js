const { obj1, obj2, obj3 } = require('./exercicio5');

  test('Json not equals', () => {
    expect(obj1).toEqual(obj2);
    expect(obj1).not.toEqual(obj3);
    expect(obj2).not.toEqual(obj3);
  });
