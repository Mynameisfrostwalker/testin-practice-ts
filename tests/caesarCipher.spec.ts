import caesarCipher from "../scripts/caesarCipher";

test("encrypts word (1)", () => {
    expect(caesarCipher("morbius", 5)).toBe("rtwgnzx");
});

test("encrypts word (2)", () => {
    expect(caesarCipher("wine", 5)).toBe("bnsj");
});

test("encrypts capital letters", () => {
    expect(caesarCipher("BALL", 5)).toBe("GFQQ")
})

test("works with other characters", () => {
    expect(caesarCipher("I am@so ^&* awesome!", 5)).toBe("N fr@xt ^&* fbjxtrj!")
})

test("works with other keys", () => {
    expect(caesarCipher("The cat sat on the mouse!", 13)).toBe("Gur png fng ba gur zbhfr!")
})
