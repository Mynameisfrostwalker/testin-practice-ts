import analyzeArray from '../scripts/analyzeArray';

test("analyze array (1)", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})

test("analyze array (2)", () => {
    expect(analyzeArray([0, 1, 1, 2, 3, 5, 8, 13])).toEqual({
        average: 4.125,
        min: 0,
        max: 13,
        length: 8
    })
});

test("works with one number", () => {
    expect(analyzeArray([25])).toEqual({
        average: 25,
        min: 25,
        max: 25,
        length: 1
    })
});

test("returns null with empty arr", () => {
    expect(analyzeArray([])).toBeNull();
});
