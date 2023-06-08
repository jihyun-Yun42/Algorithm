function solution(array) {
    return array.join('').split('').filter(e => Number(e) === 7).length
}