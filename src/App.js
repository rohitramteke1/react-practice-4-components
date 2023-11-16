import React from 'react';
import { add, sub, mul, div, rem } from './components/Calculator';
let a = 11;
let b = 10;

const App = () => {
    return (
        <>
            <h1>Simple Calculator component practice.</h1>
            <ul>
                <li>Number a:{ a } and b:{ b }</li>
                <li>Addition: { add(a, b) }</li>
                <li>Subtraction: { sub(a, b) }</li>
                <li>Multiplication: { mul(a, b) }</li>
                <li>Division: { div(a, b) }</li>
                <li>Reminder: { rem(a, b) }</li>

            </ul>
        </>
    )
}

export default App;