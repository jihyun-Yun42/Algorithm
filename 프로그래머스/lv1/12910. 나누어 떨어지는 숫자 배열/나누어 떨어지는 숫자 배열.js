function solution(arr, divisor) {
    let a = arr.filter(i => i % divisor === 0).sort((a,b) => a-b)
    return (a[0] == undefined) ? [-1] : a
}