import { useState } from "react";

export const numbers =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
export const rows = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0]
]
export const operations = ['+', '-', '*', '/']
export const equalSign = '='


export const Calculator = () => {
    const [value, setValue] = useState('')
 
    const handleClick = op => () => { setValue(value.concat(op))}
    return (
            <section>
                <h1>Calculator</h1>
                <input value={value} readOnly/>
                <div role= 'grid'>
                    {
                        rows.map((row, i) => (
                            <div key={i} role= 'row'>
                                {
                                    row.map(number => (
                                    <button onClick={handleClick(number)} key={number}>{number}</button>
                                    ))
                                }
                            </div>
                        ))
                    }
                    {
                        operations.map(operation => (
                            <button key={operation} onClick={handleClick(operation)}>{operation}</button>
                        ))
                    }
                    <button>{equalSign}</button>
                </div>
            </section>
            )
}