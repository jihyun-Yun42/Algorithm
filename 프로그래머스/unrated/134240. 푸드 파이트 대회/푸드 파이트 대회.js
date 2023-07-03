function solution(food) {
    const newArr = []
    for(let i = 1; i < food.length; i++) {
        let foodCount = Math.floor(food[i] / 2)
        newArr.push(String(i).repeat(foodCount))
    }
    return newArr.join('') + '0' + newArr.reverse().join('')
}