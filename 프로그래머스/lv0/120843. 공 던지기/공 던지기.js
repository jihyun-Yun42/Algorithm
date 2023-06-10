function solution(numbers, k) {
    let oddArr = []
    let evenArr = []
    if(numbers.length % 2 === 0) {
        oddArr = numbers.filter((e, i) => i % 2 === 0)
    } else {
        numbers.map((e, i) => i % 2 === 0 ? oddArr.push(e) : evenArr.push(e))
    }
    let newArr = [...oddArr, ...evenArr]
    return newArr[(k-1) % newArr.length]
}