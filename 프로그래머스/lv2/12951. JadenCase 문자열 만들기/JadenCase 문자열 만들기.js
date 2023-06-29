function solution(s) {
    const arr = s.toLowerCase().split(' ')
    const newArr = []
    for(let i of arr) {
        const firstStr = i.split('').map((e, i) => i === 0 ? e.toUpperCase() : e)
        newArr.push(firstStr.join(''))
    }
    return newArr.join(' ')
}