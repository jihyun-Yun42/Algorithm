function solution(i, j, k) {
    let count = 0
    for(let a = i; a <= j; a++) {
        count += String(a).split('').filter(item => Number(item) === k).length
    }
    return count
}