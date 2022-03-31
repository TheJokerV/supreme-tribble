import {sum} from "../src/sum";

test("Test sum function 5+5 greater than 5", () => {
//probar
expect(sum(5,5)).toBeGreaterThan(9);
});

test("Test sum function 5+5 greater or equal than 5", () => {
    //probar
    expect(sum(5,5)).toBeGreaterThanOrEqual(10);
    });

    test("Test sum function 5+5 less than 4", () => {
        //probar
        expect(sum(2,1)).toBeLessThanOrEqual(4);
        });