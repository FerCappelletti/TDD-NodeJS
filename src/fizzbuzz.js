

export const fizzbuzz = (number) => {
    if (typeof number !== 'number') throw new Error('parameter should be a number')
    if (Number.isNaN(number)) throw new Error('parameter should be a number')
    
    const multiplies = { 3: "fizz", 5: "buzz"}
    let output = ""

    Object
        .entries(multiplies)
        .forEach(([multiplie, word]) => {
            if (number % multiplie === 0) output += word
        })
    return output === "" ? number : output
    
};