function solution(s) {
    let numArr = s.split(' ').map(e => Number(e))
    return [Math.min(...numArr), Math.max(...numArr)].join(' ')
}