function solution(n) {
    let a = "수박"
    return (parseInt(n%2) == 0) ? a.repeat(parseInt(n / 2)) : a.repeat(parseInt(n / 2)) + "수"
}