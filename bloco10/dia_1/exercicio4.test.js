const { myFizzBuzz } = require('./exercicio4');

  test('Return fizzbuzz based in number divided for 3 and 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    expect(myFizzBuzz(9)).toEqual('fizz');
    expect(myFizzBuzz(10)).toEqual('buzz');
  });
