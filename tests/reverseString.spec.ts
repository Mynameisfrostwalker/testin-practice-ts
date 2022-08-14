import reverseString from "../scripts/reverseString";

test("reverses string (1)", () => {
    expect(reverseString("potato")).toBe("otatop");
});

test("reverses string (2)", () => {
    expect(reverseString("Quote")).toBe("etouQ");
})
