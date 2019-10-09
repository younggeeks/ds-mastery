import { convertToPrefix, convertToInfix } from '../algorithms/postfix';

describe('The postfix algorithm', () => {
  it('convertToPrefix converts postfix to prefix successfully', () => {
    const postFixExpression = 'AB+CD-*';
    const prefixExpression = '*+AB-CD';

    const result = convertToPrefix(postFixExpression);

    expect(result).toEqual(prefixExpression);
  });

  it('convertToInfix converts postfix to infix successfully', () => {
    const postFixExpression = 'abc++';
    const infixExpression = '(a+(b+c))';

    const result = convertToInfix(postFixExpression);

    expect(result).toEqual(infixExpression);
  });

  it('throws an error if provided expression is invalid', () => {
    const invalidExpression = 'abca++';
    const expectedError = 'expression used to create the stack is invalid';

    try {
      expect(convertToInfix(invalidExpression)).toThrowError(expectedError);
    } catch (error) {
      expect(error.message).toEqual(expectedError);
    }
  });
});
