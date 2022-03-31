const n= null;
const number = 0;
const notTrue = false;
const notFalse = true;

test("Test n to be null", () => {
    //probar
    expect(n).toBeNull();
    });

test("Test n to be defined", () => {
        //probar
        expect(n).toBeDefined();
        });

test("Test notTrue to be false", () => {
    //probar
    expect(notTrue).toBeFalsy();
    });

test("Test notFalse to be true", () => {
    //probar
    expect(notFalse).toBeTruthy();
        });