const fizzbuzz = require('./fizzbuzz');
describe("test", ()=>{

    test("Al mandar un 0 nos devuelve error", ()=>{
        const expected = "error, no se puede mandar un cero";
        const result = fizzbuzz(0);
        expect(expected).toBe(result);
    });
    test("Al mandar un 1 nos devuelve 1", ()=>{
        const expected = 1;
        const result = fizzbuzz(1);
        expect(expected).toBe(result);
    });
    test("Al mandar un multiplo de 3 nos devuelve fizz", ()=>{
        const expected = "fizz";
        const result = fizzbuzz(6);
        expect(expected).toBe(result);
    });
    test("Al mandar un multiplo de 5 nos devuelve buzz", ()=>{
        const expected = "buzz";
        const result = fizzbuzz(10);
        expect(expected).toBe(result);
    });
    test("Al mandar un multiplo de 3 y 5 nos devuelve fizzbuzz", ()=>{
        const expected = "fizzbuzz";
        const result = fizzbuzz(15);
        expect(expected).toBe(result);
    });
});