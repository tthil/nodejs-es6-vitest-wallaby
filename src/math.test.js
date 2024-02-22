import { it, expect } from "vitest";
import { add } from "./math";

it("should summerize all numbers in an array", () => {
  // Arrange
  const numbers = [1, 2];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce(
    (prevValuse, curValue) => prevValuse + curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should yield Nan if at least number is not a number", () => {
  // Arrange
  const input = [1, "a"];

  // Act
  const result = add(input);

  // Assert
  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of string values is passed", () => {
  // Arrange
  const numbers = ["1", "2"];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce(
    (prevValuse, curValue) => +prevValuse + +curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is passed", () => {
  // Arrange
  const numbers = [];

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(0);
});

it("should throw an error if a no value is passed", () => {
  // Arrange
  const resultFn = () => {
    add();
  };

  // Act

  // Assert
  expect(resultFn).toThrow();
});

it("should throw an error if provided multiple values insted of an array", () => {
  // Arrange
  const num1 = 1;
  const num2 = 2;

  // Act
  const resultFn = () => {
    add(num1, num2);
  };

  // Assert
  expect(resultFn).toThrow();
});
