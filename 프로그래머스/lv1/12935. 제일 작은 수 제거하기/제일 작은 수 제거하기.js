function solution(arr) {
    let a = arr.filter(i => i !== Math.min(...arr))
    return (a.length > 0) ? a : [-1]
}