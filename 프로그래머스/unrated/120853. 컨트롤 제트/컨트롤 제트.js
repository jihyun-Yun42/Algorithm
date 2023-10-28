function solution(s) {
    const newArr = s.split(' ')
    return newArr.reduce((acc, item, index) => item === 'Z' ? acc - Number(newArr[index - 1]) : acc + Number(item), 0)
}