onmessage = function(e) {
    const number = e.data;
    let result = factorial(number);
    postMessage(result);
};

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}