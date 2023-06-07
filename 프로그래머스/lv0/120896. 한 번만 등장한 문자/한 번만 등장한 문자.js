function solution(s) {
    let arr = s.split('')
    let newArr = [...new Set(arr)]
    return newArr.filter((e, i) => arr.lastIndexOf(e) === arr.indexOf(e)).sort().join('')
}