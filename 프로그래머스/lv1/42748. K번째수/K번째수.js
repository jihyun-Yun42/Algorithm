function solution(array, commands) {
    let newArr = []
    for(let [i, j, k] of commands) {
        newArr.push(array.slice(i - 1, j).sort((a,b) => a - b)[k - 1])
    }
    return newArr
}