import { Stack } from "../structures";

const operators = ['+', '-', '*', '/'];

/**
 * @param expression string
 * 
 * @description
 * 
 * Algorithm used
 *  - Read the Postfix expression from left to right
    - If the symbol is an operand, then push it onto the Stack
    - If the symbol is an operator, then pop two operands from the Stack
      Create a string by concatenating the two operands and the operator before them.
      string = operator + operand2 + operand1
      And push the resultant string back to Stack
    - Repeat the above steps until end of Prefix expression.
 */
export const convertToPrefix = (expression: string) => {
  const stack = new Stack<string>();

  expression.split('')
    .forEach((letter: string) => {
      if (operators.includes(letter)) {
        const rightOperand = stack.pop();
        const leftOperand = stack.pop();

        const subExpression = letter + leftOperand + rightOperand;

        stack.push(subExpression);
      } else {
        stack.push(letter);
      }
    });

  validateStack(stack);

  let prefixExpression = stack.pop();
  return prefixExpression;
}

/**
 * 
 * @param expression string
 * 
 * @description
 * 
 * Algorithm used
 *  - Read the Postfix expression from left to right
    - If the symbol is an operand, then push it onto the Stack
    - If the symbol is an operator, then pop two operands from the Stack
      Create a string by concatenating the two operands and the operator before them.
      string = (operand1 + operator + operand1)
      And push the resultant string back to Stack
    - Repeat the above steps until end of Prefix expression.
 * 
 */
export const convertToInfix = (expression: string) => {
  const stack = new Stack<string>();

  expression.split('')
    .forEach((letter) => {
      if (operators.includes(letter)) {
        const rightOperand = stack.pop();
        const leftOperand = stack.pop();

        const subExpression = `(${leftOperand}${letter}${rightOperand})`
        
        stack.push(subExpression);
      } else {
        stack.push(letter);
      }
    });

  validateStack(stack);

  let infixExpression = stack.pop();
  return infixExpression;
}

const validateStack = <T>(stack: Stack<T>) => {
  if (stack.isEmpty()) {
    throw new Error('stack provided is empty');
  }

  if (stack.size() > 1) {
    throw new Error('expression used to create the stack is invalid');
  }
}
