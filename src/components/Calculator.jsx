const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const mul = (a, b) => {
    return a * b;
}

const div = (a, b) => {
    let ans = a / b;
    ans = ans.toFixed(2);
    return ans;
}

const rem = (a, b) => {
    return a % b;
}

export { add, sub, mul, div, rem};