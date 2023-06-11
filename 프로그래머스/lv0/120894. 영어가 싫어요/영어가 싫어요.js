function solution(numbers) {
    const strArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for(let i = 0; i <= 9; i++) {
        numbers = numbers.split(strArr[i]).join(i)
    }
    return Number(numbers)
}