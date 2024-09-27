function solution(s) {
    const tupleArr = s.slice(2, -2).split('},{').sort((a, b) => a.length - b.length)
    const answer = tupleArr.flatMap(item => item.split(',')).map(e => +e)

    return Array.from(new Set(answer))
}