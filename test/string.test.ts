const nombre = "UNAC";
const nombre1 = "UnAc";

test("UNAC contains UN", () => {
    //probar
    expect(nombre).toMatch(/UN/);
    });

    test("UNAC doesn't contain P", () => {
        //probar
        expect(nombre).not.toMatch(/P/);
        });

        test("UnAc contains n", () => {
            //probar
            expect(nombre1).toMatch(/n/);
            });