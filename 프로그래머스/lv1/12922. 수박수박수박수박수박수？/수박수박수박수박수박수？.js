function solution(n) {
    return (parseInt(n%2) == 0) ? '수박'.repeat(parseInt(n / 2)) : '수박'.repeat(parseInt(n / 2)) + "수"
}