import { describe, expect, it } from "vitest";

/*
Write a function that when passing a number to it:
    - Display "fizz" if it is a multiple of 3
    - Display "buzz" if it is multiples of 5
    - Display "fizzbuzz" if it is a multiple of 3 and 5
    - Display the number if it is not a multiple of any of the above.
*/


const fizzbuzz = (number) => {
        if (typeof number !== 'number') throw new Error('parameter should be a number')
        if (Number.isNaN(number)) throw new Error('parameter should be a number')
};


describe("fizzbuzz", () => {
    it('should be a function', () => {
        expect(typeof fizzbuzz).toBe('function')
    })

    it('should throw if not number is provided as parameter' , () => {
        expect(() => fizzbuzz()).toThrow()
    })

    it('should throw a specific error messagge if not number is provided' , () => {
        expect(() => fizzbuzz()).toThrow('parameter should be a number')
    })

    it('should throw a specific error messagge if not number is provided' , () => {
        expect(() => fizzbuzz(NaN)).toThrow('parameter should be a number')
    })
})