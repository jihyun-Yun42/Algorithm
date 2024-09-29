function solution(n) {
    let answer = ''
    const numArr = [4, 1, 2]

    while(n) {
        answer = numArr[n % 3] + answer
        n = Math.floor((n - 1) / 3)
    }

    return answer
}