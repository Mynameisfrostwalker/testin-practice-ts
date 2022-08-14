import capitalize from "../scripts/capitalize";

test("capitalizes first letter (1)", () => {
    expect(capitalize("beep")).toBe("Beep");
})

test("capitalizes first letter (2)", () => {
    expect(capitalize("cool")).toBe("Cool");
})

test("works when first character is not a letter", () => {
    expect(capitalize(";nice move")).toBe(";Nice move");
})

test("works with already capitalized words", () => {
    expect(capitalize("Robot")).toBe("Robot");
})
