function solution(X, Y) {
    const xArr = new Array(10).fill(0)
    const yArr = new Array(10).fill(0)
    X.split('').forEach(x => xArr[x]++)
    Y.split('').forEach(y => yArr[y]++)

    let answer = ''
    for(let i = 9; i >= 0; i--) {
        const min = Math.min(xArr[i], yArr[i])
        answer = answer + String(i).repeat(min)
    }
    if(answer[0] === '0') {
        return '0'
    }
    else if(answer.length === 0) {
        return '-1'
    }
    else {
        return answer
    }
}