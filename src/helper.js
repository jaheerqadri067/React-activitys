function genTicket(n) {
    let arr = new Array(n) // OR let arr = [n]
    for(let i=0; i<n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

function sum(arr) {
    return arr.reduce((sum, cull) => sum + cull, 0);
}

export { genTicket, sum }