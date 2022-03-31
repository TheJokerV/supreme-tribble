import {div} from "../src/div";

test("Test div 10/2 equals 5", () => {
//probar
expect(div(10,2)).toBe(5);
});

//PRUEBA CONTROLADA DEL ERROR
test("Test div 5/0 equals error", () => {
    expect(div(5,0)).toBe(Infinity);
    });
