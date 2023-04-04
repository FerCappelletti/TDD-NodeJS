import { describe, expect, it } from "vitest";
import { fizzbuzz } from "../src/fizzbuzz.js";
/*
Write a function that when passing a number to it:
    - Display "fizz" if it is a multiple of 3
    - Display "buzz" if it is multiples of 5
    - Display "fizzbuzz" if it is a multiple of 3 and 5
    - Display the number if it is not a multiple of any of the above.
*/

describe("fizzbuzz", () => {
    // This test is redundant   
    // it('should be a function', () => {
    //     expect(typeof fizzbuzz).toBe('function')
    // })

    it('should throw if not number is provided as parameter' , () => {
        expect(() => fizzbuzz()).toThrow()
    })

    it('should throw a specific error messagge if not number is provided' , () => {
        expect(() => fizzbuzz()).toThrow('parameter should be a number')
    })

    it('should throw a specific error messagge if not number is provided' , () => {
        expect(() => fizzbuzz(NaN)).toThrow('parameter should be a number')
    })

    it('should return 1 if number provided is 1' , () => {
        expect(fizzbuzz(1)).toBe(1)
    })

    it('should return "fizz" if number provided is multiple of 3' , () => {
        expect(fizzbuzz(12)).toBe("fizz")
    })

    it('should return "buzz" if number provided is multiple of 5' , () => {
        expect(fizzbuzz(10)).toBe("buzz")
    })

    it('should return "fizzbuzz" if number provided is multiple of 3 & 5' , () => {
        expect(fizzbuzz(15)).toBe("fizzbuzz")
    })
})