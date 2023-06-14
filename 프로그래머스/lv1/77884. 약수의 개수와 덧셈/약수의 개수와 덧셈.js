function solution(left, right) {
    let num = 0
    for(let i = left; i <= right; i++) {
        Number.isInteger(Math.sqrt(i)) ? num -= i : num += i
    }
    return num
}