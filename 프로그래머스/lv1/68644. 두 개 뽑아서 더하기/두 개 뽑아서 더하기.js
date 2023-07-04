function solution(numbers) {
    const newArr = []
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = 1; j < numbers.length; j++) {
            if(i !== j) {                
            newArr.push(numbers[i] + numbers[j])
            }
        }
    }
    return [...new Set(newArr)].sort((a, b) => a - b)
}