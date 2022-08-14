import calculator from "../scripts/calculator";

test("add two numbers (1)", () => {
    expect(calculator.add(2, 3)).toBe(5);
})

test("add two numbers (2)", () => {
    expect(calculator.add(34, 43)).toBe(77);
})

test("subtracts two numbers (1)", () => {
    expect(calculator.subtract(10, 2)).toBe(8);
})

test("subtracts two numbers (2)", () => {
    expect(calculator.subtract(34, 39)).toBe(-5);
})

test("multiplies two numbers (1)", () => {
    expect(calculator.multiply(5, 3)).toBe(15);
})

test("multiplies two numbers (2)", () => {
    expect(calculator.multiply(43, 52)).toBe(2236);
})

test("divides two numbers (1)", () => {
    expect(calculator.divide(8, 2)).toBe(4);
})

test("divides two numbers (2)", () => {
    expect(calculator.divide(3, 4)).toBeCloseTo(0.75);
})

test("does not crash on division by zero", () => {
    expect(calculator.divide(3, 0)).toBeUndefined();
})
