function solution(numbers) {
    let a = []
    for (let i = 0; i<10; i++){
        numbers.indexOf(i) == -1 ? a.push(i) : i
    }
    return a.reduce((pre, cur)=> pre += cur)
}