const array = ["value1","value2","value3"];

test("const array contain value2", () => {
    //probar
    expect(array).toContain("value2");
    });

    test("const array not contain UNAC", () => {
    expect(array).not.toContain("UNAC");
        });
